import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import createCheckoutSession from '../utils/api';

// Initialize Stripe with your publishable key
const stripePromise = loadStripe('YOUR_PUBLISHABLE_KEY');

const PaymentForm = ({ productId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setLoading(true);

    try {
      // Create Payment Intent on your server
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/create-payment-intent`, {
        
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId: Number(productId) }),
      });
      const data = await res.json();
      const clientSecret = data.clientSecret;
      
      // Confirm the payment using Stripe.js
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: { email },
        },
      });
      
      if (result.error) {
        alert(result.error.message);
      } else if (result.paymentIntent && result.paymentIntent.status === 'succeeded') {
        // Inform your backend that payment was successful
        const successRes = await fetch(`${process.env.REACT_APP_SERVER_URL}/payment-success`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            paymentIntentId: result.paymentIntent.id,
            email,
            productId: Number(productId),
          }),
        });
        
        const successData = await successRes.json();
        if (successRes.ok) {
          alert("Payment successful! Check your email for the download link.");
        } else {
          alert("Error: " + successData.error);
        }
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred.');
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <label className="block text-gray-700 font-bold mb-2">Email Address</label>
      <input 
        type="email" 
        placeholder="Your Email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required 
        className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="p-3 border border-gray-300 rounded mb-4">
        <CardElement
            options={{
              hidePostalCode: true,
              style: {
                base: {
                  fontSize: '16px',
                  color: '#32325d',
                  '::placeholder': {
                    color: '#a0aec0',
                  },
                },
                invalid: {
                  color: '#fa755a',
                  iconColor: '#fa755a',
                },
              },
            }}
          />
     </div>
      <button 
        type="submit" 
        disabled={!stripe || loading} 
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        {loading ? 'Processing...' : 'Pay'}
      </button>
    </form>
  );
};

const Shop = () => {
  const [selectedProductId, setSelectedProductId] = useState(null);



  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Power Building</h3>
            <p className="text-gray-700 mb-4">Price: $10.00</p>
            <button 
              onClick={() => createCheckoutSession('powerbuilding')}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >
              Buy Now
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Body Building</h3>
            <p className="text-gray-700 mb-4">Price: $20.00</p>
            <button 
              onClick={() => createCheckoutSession('bodybuilding')}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >
              Buy Now
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Power Lifting</h3>
            <p className="text-gray-700 mb-4">Price: $30.00</p>
            <button 
              onClick={() => createCheckoutSession('powerlifting')}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >
              Buy Now
            </button>
          </div>
              
        </div>        

        {selectedProductId && (
          <div id="payment-section" className="mt-10 bg-red-600">
            <h2 className="text-2xl font-bold text-center mb-6">Complete Your Payment</h2>
            <Elements stripe={stripePromise}>
              <PaymentForm productId={selectedProductId} />
            </Elements>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;