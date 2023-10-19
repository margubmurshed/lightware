import React, { useContext, useEffect, useState } from 'react';
import { PiWarningCircleBold } from 'react-icons/pi'
import { AuthContext } from '../../provider/AuthProvider';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const UserOrders = () => {
    // const [orders, setOrders] = useState([]]);

    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    useEffect(() => {
        if (!loading) {
            axiosSecure.get(`/orders?email=${user?.email}`)
                .then(res => {
                    console.log(res);
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }, [user]);

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