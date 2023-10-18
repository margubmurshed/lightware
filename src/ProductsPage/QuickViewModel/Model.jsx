import React, { useState } from 'react';

const Model = () => {
    const [open, setOpen] = useState(true)
    const closeModal = () => {
        setOpen(false)
    }

    const openModal =() => {
        setOpen(true)
    }
    return (
        <div>
              <div>
                  <button onClick={openModal} className='bg-[red] px-2 py-2'>open model</button>
              </div>
        </div>
    );
};

export default Model;