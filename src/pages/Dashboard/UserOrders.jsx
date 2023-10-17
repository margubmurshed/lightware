import {PiWarningCircleBold} from 'react-icons/pi'

const UserOrders = () => {
    return (
        <div className='md:border-l px-8 min-h-[250px]'>
            <div className="bg-[#E0B252] flex gap-1 items-center px-6 py-4 rounded-md">
                <PiWarningCircleBold className='text-white font-bold text-[20px]' />
                <p className="text-[14px] text-white">No order has been made yet.</p>    
            </div>           
        </div>
    );
};

export default UserOrders;