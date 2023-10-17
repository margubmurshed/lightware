const AccountDetails = () => {
    return (
        <div className='md:border-l px-8'>
            <form className="flex flex-col gap-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="text-[14px] text-[#242424]" htmlFor="first_name">First Name <span className="text-red-500 text-[18px]">*</span></label>
                        <input className="text-gray-600 text-[16px] border-2 px-3 py-2 focus:outline-none focus:border-gray-300 transition-colors duration-300" type="text" id="first_name" name="first_name" required value="Mutaher Ahmed" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-[14px] text-[#242424]" htmlFor="last_name">Last Name <span className="text-red-500 text-[18px]">*</span></label>
                        <input className="text-gray-600 text-[16px] border-2 px-3 py-2 focus:outline-none focus:border-gray-300 transition-colors duration-300" type="text" id="last_name" name="last_name" required value="Shakil" />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-[14px] text-[#242424]" htmlFor="display_name">Display Name <span className="text-red-500 text-[18px]">*</span></label>
                    <input className="text-gray-600 text-[16px] border-2 px-3 py-2 focus:outline-none focus:border-gray-300 transition-colors duration-300" type="text" id="display_name" name="display_name" required value="Mutaher Ahmed Shakil" />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-[14px] text-[#242424]" htmlFor="email">Email <span className="text-red-500 text-[18px]">*</span></label>
                    <input className="text-gray-600 text-[16px] border-2 px-3 py-2 focus:outline-none focus:border-gray-300 transition-colors duration-300" type="email" id="email" name="email" disabled value="mutaher.shakil@gmail.com" />
                </div>

                <div>
                    <input className="cursor-pointer px-4 py-2 bg-black text-white text-[14px] uppercase" type="submit" value="Save Changes" />
                </div>
            </form>
        </div>
    );
};

export default AccountDetails;