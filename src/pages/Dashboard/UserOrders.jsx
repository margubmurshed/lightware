import React, { useContext, useEffect, useState } from 'react';
import { PiWarningCircleBold } from 'react-icons/pi'
import { AuthContext } from '../../provider/AuthProvider';

const UserOrders = () => {
    // const [orders, setOrders] = useState([]]);

    const { user } = useContext(AuthContext);
    
    useEffect(() => {
        const url = `http://localhost:5000/orders?email=${user?.email}`;

        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(!data.error){
                console.log('jwt implemented correctly');
                // show orders to the user
            }
            else {
                // logout and redirect to home
            }
        }) 
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