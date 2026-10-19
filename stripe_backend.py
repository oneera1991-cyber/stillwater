"""
Stripe Checkout backend example for Stillwater
Run: python stripe_backend.py
Requires: STRIPE_SECRET_KEY environment variable
"""
import os
import stripe
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

stripe.api_key = os.environ.get('STRIPE_SECRET_KEY', 'sk_test_...')

@app.route('/create-checkout-session', methods=['POST'])
def create_checkout_session():
    data = request.json
    item = data.get('item', 'Stillwater Report')
    amount = int(data.get('amount', 199)) * 100  # satang / cents
    return_url = data.get('return_url', 'https://yourdomain.com/pattern.html')

    try:
        session = stripe.checkout.Session.create(
            line_items=[{
                'price_data': {
                    'currency': 'thb',
                    'product_data': {'name': item},
                    'unit_amount': amount,
                },
                'quantity': 1,
            }],
            mode='payment',
            success_url=return_url + '?paid=1&session_id={CHECKOUT_SESSION_ID}',
            cancel_url=return_url + '?canceled=1',
        )
        return jsonify({'url': session.url})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(port=5000, debug=True)
