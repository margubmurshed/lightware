import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Rating } from '@smastrom/react-rating';

export default function Model({ isOpen, setIsOpen, productData }) {
    const { discount, code, title, availability, description, price, review, featuredImage, brand } = productData

    const newPrize = price - (discount * price / 100);

    function closeModal() {
        setIsOpen(false)
    }



    return (
        <>


            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">

                                    <div className='grid lg:grid-cols-2 gap-8'>
                                        <div>
                                            <img src={featuredImage} alt="" />
                                        </div>

                                        <div>
                                            {title}
                                            <div className='flex items-center space-x-2'>
                                                <Rating
                                                    style={{ maxWidth: 80 }}
                                                    value={review}
                                                    readOnly
                                                />
                                                <p>({review})</p>
                                            </div>
                                            <div className='flex item-center space-x-4 py-4'>
                                                <p className='bg-[#FFCD05] px-2 py-1 text-[#262626] text-sm text-medium'>-{discount}%</p>
                                                <p className='font-medium text-[red]'>${newPrize}</p>
                                                <p className='text-[#DDDEE2]'><del>${price}</del></p>
                                            </div>
                                            <div className='space-y-2'>
                                                <p>Brand:<span className='px-2 text-[red]'>{brand}</span></p>
                                                <p>Availability:<span className='px-2 text-[red]'>{availability}</span> </p>
                                                <p>SKU:<span className='px-2 text-[red]'>{code}</span></p>
                                            </div>

                                            <h2 className='py-4'>{description.slice(0,120)}</h2>
                                            <div className='py-2'>
                          <button className='bg-[#E51515] px-4 py-3 text-white font-bold  w-full rounded-xl hover:bg-[#9D4D4A] hover:text-white duration-300'>ADD TO CART</button>
                    </div>
                                        </div>
                                    </div>

                <div className="top-0 right-0 absolute">
                    <button
                      type="button"
                      className="inline-flex justify-center bg-[#E51515] hover:bg-[#9D4D4A] px-4 py-2 text-xl  text-white font-semibold duration-300 focus:outline-none focus-visible:ring-2 "
                      onClick={closeModal}
                    >
                      X
                    </button>
                  </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
