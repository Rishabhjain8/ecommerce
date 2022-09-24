import React from 'react';
import youngster from '../images/youngster.png';
import { AiFillStar, AiFillMinusCircle } from 'react-icons/ai';
import { TbDiscount } from 'react-icons/tb';
import { IoMdAddCircle } from 'react-icons/io';
import { useState } from 'react';

const ProductPage = () => {
    const [qty, setQty] = useState(1);
    const [pin, setPin] = useState(null);
    const [pincode, setPincode] = useState('')

    const incQty = () => {
        setQty(qty + 1);
    }

    const decQty = () => {
        if (qty <= 1) {
            setQty(1);
        }
        else {
            setQty(qty - 1);
        }
    }

    const handleChange = (e) => {
        setPincode(e.target.value);
    }

    return (
        <div className='flex flex-wrap lg:gap-20 px-4 py-8 mdm:justify-center mdm:items-center'>
            <div className='w-3/4 flex flex-wrap mx-auto justify-between'>
                <div className='product-img flex justify-start items-start mdtlg:w-2/3 h-[83vh]'>
                    <img src='https://technext.github.io/hexashop/assets/images/men-03.jpg' alt='Product' className='h-full' />
                </div>
                <div className='product-info flex flex-col mdtlg:items-start items-center mdtlg:w-1/3 w-1/3'>
                    <h1 className='text-2xl'>ASHTAR</h1>
                    <h2 className='text-gray-400'>Product Id: 3839643964</h2>
                    <div className='flex smm:flex-col gap-4 items-center smm:text-sm mt-6 cursor-pointer justify-center'>
                        <p className='flex justify-center items-center'><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> </p>
                        <p className='review text-blue-500 text-center'>820 Reviews(1000) | </p>
                        <p className='text-blue-400 text-center'>Write a Review</p>
                    </div>
                    <div className='flex gap-2 price mt-4 items-center'>
                        <p className='text-lg text-red-500'>₹1099/-</p>
                        <p className='line-through text-gray-500'>₹1299/-</p>
                    </div>
                    <div className='offer bg-gray-200 w-fit p-1.5 flex items-center gap-2 smm:text-sm text-lg text-red-500 mt-1'>
                        <TbDiscount />
                        <p className=''>Special Offer 20% off on Category</p>
                    </div>
                    <div className='color flex flex-wrap flex-col mt-6 cursor-pointer gap-1'>
                        <h2 className='text-gray-500 text-center'>COLOR: <span className='text-black'>Red</span></h2>
                        <div className='color-box flex gap-3 items-center'>
                            <p className='bg-red-500 border-gray-400 hover:border-black border h-5 w-5 rounded-full'></p>
                            <p className='bg-blue-500 border-gray-400 hover:border-black border h-5 w-5 rounded-full'></p>
                            <p className='bg-green-500 border-gray-400 hover:border-black border h-5 w-5 rounded-full'></p>
                            <p className='bg-yellow-500 border-gray-400 hover:border-black border h-5 w-5 rounded-full'></p>
                            <p className='bg-black border-gray-400 hover:border-black border h-5 w-5 rounded-full'></p>
                        </div>
                    </div>
                    <div className='color flex flex-wrap flex-col mt-6 cursor-pointer gap-1 px-4 w-72 md:w-full md:px-0 items-center'>
                        <h2 className='text-gray-500'>SIZE: <span className='text-black'>Large</span></h2>
                        <div className='color-box flex flex-wrap gap-1 items-center text-sm md:text-base'>
                            <div className='border border-gray-400 hover:border-black h-6 w-10 flex justify-center items-center'>
                                <p>S</p>
                            </div>
                            <div className='border border-gray-400 hover:border-black h-6 w-10 flex justify-center items-center'>
                                <p>M</p>
                            </div>
                            <div className='border border-gray-400 hover:border-black h-6 w-10 flex justify-center items-center'>
                                <p>L</p>
                            </div>
                            <div className='border border-gray-400 hover:border-black h-6 w-10 flex justify-center items-center'>
                                <p>XL</p>
                            </div>
                            <div className='border border-gray-400 hover:border-black h-6 w-10 flex justify-center items-center'>
                                <p>XXL</p>
                            </div>
                            <p className='text-blue-400 md:ml-2'>Show Chart</p>
                        </div>
                    </div>
                    <div className='stock mt-6 text-sm md:text-base'>
                        <h2 className='text-gray-500'>AVAILABILITY: <span className='text-black md:text-lg'>In Stock</span></h2>
                    </div>
                    <div className="flex flex-col flex-wrap mt-6 justify-center items-center md:items-start gap-4">
                        <div className='flex flex-col'>
                            <h2 className='text-gray-500'>QUANTITY: <span className='text-black ml-1'>{qty}</span></h2>
                            <p className='flex justify-center items-center md:justify-start gap-1 text-lg cursor-pointer'><AiFillMinusCircle className='text-red-500' onClick={decQty} /> {qty} <IoMdAddCircle className='text-red-500' onClick={incQty} /></p>
                        </div>
                        <div className='flex gap-2 md:gap-4 items-center'>
                            <button className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded md:text-base text-sm">Buy Now</button>
                            <button className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded md:text-base text-sm ">Add to Cart</button>
                            <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                </svg>
                            </button>
                        </div>
                        <div className='pincode flex flex-col gap-2 w-72 md:w-full md:px-0 mdm:w-full'>
                            <div className='flex flex-wrap gap-2 md:gap-4'>
                                <input value={pincode} type='text' name='pincode' id='pincode' placeholder='Enter your pincode' className='border border-gray-400 px-2 py-1 rounded-md focus:outline-black' onChange={handleChange} />
                                <button className="text-white bg-red-500 w-20 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded md:text-base text-sm">Check</button>
                            </div>
                            {pin === true && <p className='text-green-500 text-sm'>We are providing our service at this pincode.</p>}
                            {pin === false && <p className='text-red-500 text-sm'>Sorry, Currently We are not providing our service at this pincode. It will be available soon.</p>}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductPage