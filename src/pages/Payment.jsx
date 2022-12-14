import React, { useState, useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { CheckoutForm } from '../components'

const stripePromise = loadStripe('pk_test_51Lb5dyHDKqoVgyklOV9pFWhIjFADhCK1PyzEf65ggP2EcOOI0qcpvWmYsF8bbZhfKWciWDFbi7QRnfPmkRPTt8ZF005unMNe1D');

const Payment = () => {

    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch('http://192.168.20.120:8000/api/store/create-payment-intent/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ items: [{ id: 'xl-tshirt' }] }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, []);

    const appearance = {
        theme: 'night',
        labels: 'floating'
    };

    const options = {
        clientSecret,
        appearance,
    };

    return (
        <>
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            )}
        </>
    );
}

export default Payment