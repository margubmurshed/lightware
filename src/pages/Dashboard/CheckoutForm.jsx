import { CardElement, useElements, useStripe, } from "@stripe/react-stripe-js";
import React, { useState } from 'react';

const CheckoutForm = ({ price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');

    const handleSubmit = async (event) => {
        // prevent from submission
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return
        }

        console.log('card:', card);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message);
        } else {
            setCardError('');
            console.log('[PaymentMethod]', paymentMethod);
        }
    }

    return (
        <div className="bg-zinc-300 pt-8">
        { cardError && <p className="text-rose-600 px-5 pb-3">{cardError}</p>}
        <form className="flex flex-col gap-4 px-5  pb-10" onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-neutral bg-black text-white w-3/12 p-2" type="submit" disabled={!stripe}>
                Pay Now
            </button>
        </form>
        </div>
    );
};

export default CheckoutForm;