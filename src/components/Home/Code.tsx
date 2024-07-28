"use client";
import React from 'react';
import { toast, Toaster } from 'react-hot-toast';

const Code = () => {
    const couponCode = "EXCLUSIVE10";

    const handleCopy = () => {
        navigator.clipboard.writeText(couponCode);
        toast.success("Copied!");
    };

    return (
        <div className='flex justify-center    '>
            <div className="cta-container w-full lg:w-[60%] mt-8 p-4 bg-gradient-to-r from-[#e8f6ff] to-white shadow-custom rounded-xl text-center">
                <h3 className="text-2xl font-bold mb-2">Exclusive Offer!</h3>
                <p className="mb-4">Use the coupon code below for a special discount:</p>
                <div className="flex justify-center items-center">
                    <span className="bg-blue-200 text-blue-800 py-2 px-4 rounded-lg mr-2">{couponCode}</span>
                    <button
                        className="bg-blue-600 text-white py-2 px-4 rounded-lg"
                        onClick={handleCopy}
                    >
                        Copy Code!
                    </button>
                </div>
                <Toaster />
            </div>
        </div>
    );
};

export default Code;
