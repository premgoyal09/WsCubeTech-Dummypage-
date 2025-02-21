import React from 'react';

export default function Experts() {
    return (
        <div className='max-w-[1240px] mx-auto my-10   md:grid grid-cols-2 p-2'>
            <div className="col-span-1 w-[80%] text-center  inline">
                <img src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1024-512,f_auto,q_auto:best/rockcms/2023-11/231106-best-laptops-oo-main-efe15c.jpg" alt="" />
            </div>
            <div className="col-span-1 flex flex-col justify-center">
                <h1 className='text-[#00df9a] font-bold my-2'>LEARN FROM EXPERTS</h1>
                <p className='my-2'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet rerum laborum beatae ipsa est eos incidunt nam dignissimos, iusto quam, sequi libero vel! Error commodi nemo illo quia, nulla amet.
                </p>
                <button className='w-[30%] bg-black text-white p-3 rounded'>Get started</button>
            </div>
        </div>
    );
}