"""
Stillwater Backend
- Real chart calculation
- User data persistence (SQLite)
- Psychological insight generation
"""
import os
import json
import sqlite3
from datetime import datetime
from flask import Flask, request, jsonify
from flask_cors import CORS
import calc_engine

app = Flask(__name__)
CORS(app)

DB_PATH = 'stillwater.db'

def init_db():
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE,
        password TEXT,
        first_name TEXT,
        last_name TEXT,
        username TEXT,
        birthdate TEXT,
        birthtime TEXT,
        gender TEXT,
        city TEXT,
        country TEXT,
        chart_json TEXT,
        created_at TEXT
    )''')
    c.execute('''CREATE TABLE IF NOT EXISTS bonds (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_email TEXT,
        name TEXT,
        birthdate TEXT,
        birthtime TEXT,
        type TEXT,
        chart_json TEXT,
        synastry_json TEXT,
        created_at TEXT
    )''')
    conn.commit()
    conn.close()

init_db()

def get_db():
    return sqlite3.connect(DB_PATH)

@app.route('/api/register', methods=['POST'])
def register():
    data = request.json
    email = data.get('email')
    if not email:
        return jsonify({'error': 'email required'}), 400

    chart = None
    if data.get('birthdate'):
        try:
            y, m, d = map(int, data['birthdate'].split('-'))
            h, mi = 12, 0
            if data.get('birthtime'):
                h, mi = map(int, data['birthtime'].split(':'))
            chart = calc_engine.calculate_chart(y, m, d, h, mi)
        except Exception as e:
            chart = {'error': str(e)}

    conn = get_db()
    c = conn.cursor()
    try:
        c.execute('''INSERT INTO users 
            (email, password, first_name, last_name, username, birthdate, birthtime, gender, city, country, chart_json, created_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)''',
            (email, data.get('password'), data.get('firstName'), data.get('lastName'),
             data.get('username'), data.get('birthdate'), data.get('birthtime'),
             data.get('gender'), data.get('city'), data.get('country'),
             json.dumps(chart) if chart else None, datetime.utcnow().isoformat()))
        conn.commit()
    except sqlite3.IntegrityError:
        return jsonify({'error': 'email already exists'}), 400
    finally:
        conn.close()

    return jsonify({'ok': True, 'chart': chart})

@app.route('/api/pattern', methods=['POST'])
def get_pattern():
    data = request.json
    email = data.get('email')
    conn = get_db()
    c = conn.cursor()
    c.execute('SELECT chart_json, first_name FROM users WHERE email = ?', (email,))
    row = c.fetchone()
    conn.close()
    if not row or not row[0]:
        return jsonify({'error': 'no chart'}), 404

    chart = json.loads(row[0])
    name = row[1] or 'You'
    insights = generate_psychological_pattern(chart, name)
    return jsonify(insights)

@app.route('/api/bond', methods=['POST'])
def create_bond():
    data = request.json
    user_email = data.get('user_email')
    name = data.get('name')
    birthdate = data.get('birthdate')
    birthtime = data.get('birthtime', '12:00')
    bond_type = data.get('type', 'romantic')

    # Get user chart
    conn = get_db()
    c = conn.cursor()
    c.execute('SELECT chart_json FROM users WHERE email = ?', (user_email,))
    row = c.fetchone()
    if not row or not row[0]:
        conn.close()
        return jsonify({'error': 'user chart not found'}), 404
    user_chart = json.loads(row[0])

    # Calculate other person's chart
    try:
        y, m, d = map(int, birthdate.split('-'))
        h, mi = map(int, birthtime.split(':')) if birthtime else (12, 0)
        other_chart = calc_engine.calculate_chart(y, m, d, h, mi)
    except Exception as e:
        conn.close()
        return jsonify({'error': str(e)}), 400

    syn = calc_engine.synastry(user_chart, other_chart)
    report = generate_bond_report(user_chart, other_chart, syn, name, bond_type)

    c.execute('''INSERT INTO bonds (user_email, name, birthdate, birthtime, type, chart_json, synastry_json, created_at)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?)''',
              (user_email, name, birthdate, birthtime, bond_type,
               json.dumps(other_chart), json.dumps(syn), datetime.utcnow().isoformat()))
    conn.commit()
    conn.close()

    return jsonify(report)

def generate_psychological_pattern(chart, name):
    planets = chart.get('planets', {})
    sun = planets.get('sun', {}).get('sign', 'Unknown')
    moon = planets.get('moon', {}).get('sign', 'Unknown')
    venus = planets.get('venus', {}).get('sign', 'Unknown')
    mars = planets.get('mars', {}).get('sign', 'Unknown')
    aspects = chart.get('aspects', [])

    summary = f"Your core pattern combines a {sun} drive with a {moon} emotional style. In relationships you tend to express affection through {venus} qualities while pursuing connection with {mars} energy."

    attachment = f"With the Moon in {moon}, you process feelings internally and may need time before you feel safe enough to open up. This can create a pattern where you appear reserved even when you care deeply."

    communication = f"Venus in {venus} shapes how you show care. You may prefer demonstrating interest through consistency or small gestures rather than direct verbal reassurance."

    patterns = "A recurring dynamic appears when your need for emotional safety (Moon) meets your desire for closeness (Venus/Mars). If the other person moves at a different pace, you may withdraw to protect yourself."

    strengths = f"Your strength lies in the ability to notice subtle shifts in a relationship. The caution is waiting too long to name what you need, especially when {sun} wants clarity but {moon} wants to avoid disruption."

    return {
        'summary': summary,
        'attachment': attachment,
        'communication': communication,
        'patterns': patterns,
        'strengths': strengths,
        'chart_summary': {'sun': sun, 'moon': moon, 'venus': venus, 'mars': mars}
    }

def generate_bond_report(user_chart, other_chart, synastry, name, bond_type):
    user_venus = user_chart.get('planets', {}).get('venus', {}).get('sign', '')
    other_mars = other_chart.get('planets', {}).get('mars', {}).get('sign', '')

    strong = [a for a in synastry if a['aspect'] in ('trine', 'sextile', 'conjunction')]
    tense = [a for a in synastry if a['aspect'] in ('square', 'opposition')]

    summary = f"The connection with {name} shows both natural pull and points of friction. "
    if strong:
        summary += f"There is supportive contact between your charts that can feel easy at first. "
    if tense:
        summary += f"There are also tension points that tend to appear around pace and emotional expression."

    attraction = f"Attraction often comes from complementary styles — your Venus in {user_venus} meeting their Mars in {other_mars} creates a sense that the other person brings something you respond to."

    friction = "Friction typically surfaces when one person wants more verbal clarity while the other expresses care through actions or needs more time. Silence can be misread as distance."

    communication = "Naming one specific need early, rather than waiting to see if the other person notices, reduces the chance of repeating old withdrawal patterns."

    outlook = "If both people can tolerate a difference in pace without interpreting it as rejection, the connection has room to stabilize. Without that, the same cycle of approaching and pulling back is likely to continue."

    return {
        'summary': summary,
        'attraction': attraction,
        'friction': friction,
        'communication': communication,
        'outlook': outlook,
        'synastry_count': len(synastry)
    }

if __name__ == '__main__':
    app.run(port=5001, debug=True)
