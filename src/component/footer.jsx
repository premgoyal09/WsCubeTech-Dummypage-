import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export default function Footer() {
    return (

    <div className='bg-blue-500 h-[1000px] md:h-[300px] grid md:grid-cols-5 p-10 justify-around md:justify-center'>
            <div className="h-[100px] m-3 col-span-2">
                <h1 className='font-bold text-3xl pb-4'>WsCube Tech.</h1>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nisi asperiores quae et aliquid sunt saepe accusantium placeat quisquam assumenda?</p>
                <div className="flex items-center gap-10 text-3xl text-white py-3">
                <FaFacebookSquare />
                <FaInstagram />
                <FaTwitterSquare />
                <FaGithub />
                </div>
            </div>
            
            <div className="h-[100px] m-3">
                <h3 className='py-1 font-bold'>Solutions</h3>
                <ul className='text-white gap-3'>
                    <li className='py-2'>Analytics</li>
                    <li className='py-2'>Marketing</li>
                    <li className='py-2'>Commerce</li>
                    <li className='py-2'>Insights</li>
                    <li className='py-2'></li>
                </ul>
            </div>
            <div className="h-[100px] m-3">
                <h3 className='py-1 font-bold'>Support</h3>
                <ul className='text-white gap-3'>
                    <li className='py-2'>Pricing</li>
                    <li className='py-2'>Documentation</li>
                    <li className='py-2'>guides</li>
                    <li className='py-2'>API Status</li>
                </ul>
            </div>
            <div className=" h-[100px] m-3">
                <h3 className='py-1 font-bold'>Company</h3>
                <ul className='text-white gap-3'>
                    <li className='py-2'>About</li>
                    <li className='py-2'>Blog</li>
                    <li className='py-2'>Jobs</li>
                    <li className='py-2'>Press</li>
                    <li className='py-2'>Careers</li>
                </ul>
            </div>
        </div>
    );
}