import React from 'react';
import { ReactTyped } from "react-typed";


export default function Banner() {
    return (
        <div className='bg-[#2699fb] w-full py-[50px]'>
            <div className="max-w-[1240px] mx-auto py-[100px] text-center font-bold">
                <div className='text-xl md:text-3xl md:p-[24px]'>
                    Learn with us
                </div>
                <h2 className='text-white text-3xl  md:text-[80px] md:p-[24px]'>Grow with us.</h2>
                <div className='text-[20px] md:text-[50px] md:p-[24px] text-white '>
                    Learn
                    <ReactTyped className='pl-3'
                        strings={["Web Development", "Digital Marketing", "Ethical Hacking"]}
                        typeSpeed={100}
                        loop={true}
                        backSpeed={80}
                    />
                </div>
            </div>
        </div>
    );
}