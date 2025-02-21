import React, { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [toggle, setToggle] = useState(false);


  return (
    <div className='bg-[#2699fb] p-4'>
      <div className="max-w-[1240px] mx-auto flex justify-between items-center  py-[12px]">
        <div className='text-3xl font-bold'>
          WsCube Tech
        </div>
        {
          toggle ?
            < AiOutlineClose onClick={() => setToggle(!toggle)} className='text-white text-3xl md:hidden block' />
            :
            < AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white text-3xl md:hidden block' />
        }

        <ul className='hidden md:flex  text-white gap-10'>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Course</a></li>
          <li><a href="#">Service</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        {/* Responsive menu */}
        <ul className={`md:hidden w-full h-screen text-white fixed gap-10 bg-black top-[92px]
              ${toggle ? 'left-[0]' : 'left-[-100%]'}
        `}>
          <li className='p-5'><a href="#">Home</a></li>
          <li className='p-5'><a href="#">About</a></li>
          <li className='p-5'><a href="#">Course</a></li>
          <li className='p-5'><a href="#">Service</a></li>
          <li className='p-5'><a href="#">Contact</a></li>
        </ul>

      </div>
    </div>


  );
}