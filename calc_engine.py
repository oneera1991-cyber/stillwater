import swisseph as swe
from datetime import datetime
import json

swe.set_ephe_path('')

SIGNS = ['Aries','Taurus','Gemini','Cancer','Leo','Virgo',
         'Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces']

PLANETS = {
    'sun': swe.SUN,
    'moon': swe.MOON,
    'mercury': swe.MERCURY,
    'venus': swe.VENUS,
    'mars': swe.MARS,
}

ASPECTS = [
    ('conjunction', 0, 8),
    ('sextile', 60, 6),
    ('square', 90, 8),
    ('trine', 120, 8),
    ('opposition', 180, 8),
]

def lon_to_sign(lon):
    return SIGNS[int(lon // 30)]

def calculate_chart(year, month, day, hour=12, minute=0, lat=13.7563, lon=100.5018):
    jd = swe.julday(year, month, day, hour + minute / 60.0)
    result = {'planets': {}, 'jd': jd}

    for name, planet_id in PLANETS.items():
        pos = swe.calc_ut(jd, planet_id)[0]
        result['planets'][name] = {
            'longitude': round(pos[0], 2),
            'sign': lon_to_sign(pos[0])
        }

    # Ascendant + houses
    houses = swe.houses(jd, lat, lon, b'P')
    result['ascendant'] = {
        'longitude': round(houses[1][0], 2),
        'sign': lon_to_sign(houses[1][0])
    }
    result['houses'] = [round(h, 2) for h in houses[1]]

    # Aspects within the chart
    result['aspects'] = find_aspects(result['planets'])
    return result

def find_aspects(planets):
    aspects = []
    names = list(planets.keys())
    for i in range(len(names)):
        for j in range(i + 1, len(names)):
            p1, p2 = names[i], names[j]
            diff = abs(planets[p1]['longitude'] - planets[p2]['longitude'])
            diff = min(diff, 360 - diff)
            for aspect_name, angle, orb in ASPECTS:
                if abs(diff - angle) <= orb:
                    aspects.append({
                        'planet1': p1,
                        'planet2': p2,
                        'aspect': aspect_name,
                        'orb': round(abs(diff - angle), 2)
                    })
    return aspects

def synastry(chart1, chart2):
    """Compare two charts for relationship aspects."""
    aspects = []
    for p1_name, p1 in chart1['planets'].items():
        for p2_name, p2 in chart2['planets'].items():
            diff = abs(p1['longitude'] - p2['longitude'])
            diff = min(diff, 360 - diff)
            for aspect_name, angle, orb in ASPECTS:
                if abs(diff - angle) <= orb:
                    aspects.append({
                        'person1': p1_name,
                        'person2': p2_name,
                        'aspect': aspect_name,
                        'orb': round(abs(diff - angle), 2)
                    })
    return aspects

if __name__ == '__main__':
    # Example charts
    chart_a = calculate_chart(1995, 6, 15, 14, 30)
    chart_b = calculate_chart(1993, 11, 8, 9, 15)
    print("=== Chart A ===")
    print(json.dumps(chart_a, indent=2))
    print("\n=== Synastry A-B ===")
    print(json.dumps(synastry(chart_a, chart_b), indent=2))
