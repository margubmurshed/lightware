const UserAddress = () => {
    return (
        <div className='md:border-l px-8 min-h-[250px]'>
            <h1 className="text-[15px] text-[#777777] mb-3">The following addresses will be used on the checkout page by default.</h1>

            <div className="my-6">
                <div className="flex items-center gap-2 uppercase text-[22px] text-[#242424] font-semibold">
                    <h1>Address</h1>
                    <span className="capitalize text-[12px] text-[#666666] hover:text-[#242424] transition-colors duration-500 cursor-pointer">Edit</span>
                </div>
                <div className="mt-2 text-[16px] text-[#777777] italic">
                    <h3>Mutaher Ahmed Shakil</h3>
                    <h3>Udoyon 45 - Uposhohor</h3>
                    <h3>Sylhet</h3>
                    <h3>Sylhet</h3>
                </div>
            </div>
        </div>
    );
};

export default UserAddress;