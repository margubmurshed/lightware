import React from 'react';

const Payment = () => {
    return (
        <div className='md:border-l px-8'>
            <form className="flex flex-col gap-4 px-5 pt-5 pb-10 bg-zinc-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="text-[14px] text-[#242424]" htmlFor="first_name">Card Number <span className="text-red-500 text-[18px]">*</span></label>
                        <input className="text-gray-600 text-[16px] border-2 px-3 py-2 focus:outline-none focus:border-gray-300 transition-colors duration-300" type="text" id="card-number" name="card-number" required placeholder="Card Number" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-[14px] text-[#242424]" htmlFor="last_name">MM/YY CVC <span className="text-red-500 text-[18px]">*</span></label>
                        <input className="text-gray-600 text-[16px] border-2 px-3 py-2 focus:outline-none focus:border-gray-300 transition-colors duration-300" type="text" id="cvc" name="cvc" required placeholder="MM/YY CVC" />
                    </div>
                </div>


            </form>
        </div>
    );
};

export default Payment;