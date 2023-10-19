import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Getway_PK);

const Payment = () => {
    // const [cart] = useCart();
    const cart = [
                {name:'t-shirt', qty: 2, price:30}, 
                {name:'polo-shirt', qty: 3, price:50}, 
                {name:'pant', qty: 4, price:70}
                 ];
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2));
    console.log("total==============", total);
   
    return (
        <div className='md:border-l px-8'>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price}></CheckoutForm>

            </Elements>
            {/* <form className="flex flex-col gap-4 px-5 pt-5 pb-10 bg-zinc-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="text-[14px] text-[#242424]" htmlFor="first_name">Card Number <span className="text-red-500 text-[18px]">*</span></label>
                        <input className="text-gray-600 text-[16px] border-2 px-3 py-2 focus:outline-none focus:border-gray-300 transition-colors duration-300" type="text" id="card-number" name="card-number" required placeholder="Card Number" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-[14px] text-[#242424]" htmlFor="last_name">MM/YY CVC <span className="text-red-500 text-[18px]">*</span></label>
                        <input className="text-gray-600 text-[16px] border-2 px-3 py-2 focus:outline-none focus:border-gray-300 transition-colors duration-300" type="text" id="cvc" name="cvc" required placeholder="MM/YY CVC" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <button className="btn btn-neutral bg-black text-white w-3/12 p-2">Pay Now</button>
                    </div>
                </div>
            </form> */}
        </div>
    );
};

export default Payment;