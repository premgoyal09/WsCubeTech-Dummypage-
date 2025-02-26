import React from 'react';

export default function NewsLetter() {
    return (
        <div className='bg-[#2699fb] p-4'>
            <div className="max-w-[1240px] mx-auto md:flex justify-between py-[50px]">
                <div className="m-2">
                    <h1 className='text-[40px] font-bold text-white'>Want to Learn Latest I.T skills?</h1>
                    <span className='text-white'>Sign up to our newsletter  and stayup to date</span>
                </div>
                <div className="">
                    <input type="text" className='rounded mb-2 p-3 mr-2 text-slate-600' placeholder='Email' />
                    <button className='bg-black text-white p-3 rounded'>Get started</button>
                    <br />
                    <p className='text-white'>
                            We care bout the protection of your data. Read our <br /> <a href="" className='text-black'>Privacy Policy</a>
                    </p>
                </div>
            </div>
        </div>
    );
}