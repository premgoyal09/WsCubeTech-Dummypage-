import React from 'react';

export default function App() {
  return (
    <div className='py-[100px] px-2'>
      <div className="mx-auto max-w-[1240px] md:grid grid-cols-3 gap-6">
        <div className="shadow-xl h-[500px]  my-4 hover:scale-105 duration-500 text-center p-5">
          <h1 className='text-center font-bold text-3xl'>Web Devlopment</h1>
          <br />
          <h2 className='font-bold text-3xl'>$149</h2>
          <br />
          <p className='mt-4 mb-2 font-semibold'>Lorem ipsum is simply.</p>
          <hr />
          <p className='mt-4 mb-2 w-[80%] ml-[35px] font-semibold'>Lorem, ipsum is Simply dummy textof the printing</p>
          <hr />
          <p className='mt-4 mb-2'>Lorem ipsum is simply dumm.</p>
          <hr />
          <br />
          <button className='bg-green-400 p-2 w-[40%] rounded text-white font-bold'>Start Trial</button>
        </div>

        {/* second-contain */}
        <div className="shadow-xl h-[500px] my-4  bg-gray-100 hover:scale-105 duration-500 text-center p-5">
          <h1 className='text-center  font-bold text-3xl'>Web Devlopment</h1>
          <br />
          <h2 className='font-bold text-3xl'>$149</h2>
          <br />
          <p className='mt-4 mb-2 font-semibold'>Lorem ipsum is simply.</p>
          <hr />
          <p className='mt-4 mb-2 w-[80%] ml-[35px] font-semibold'>Lorem, ipsum is Simply dummy textof the printing</p>
          <hr />
          <p className='mt-4 mb-2 font-semibold'>Lorem ipsum is simply dumm.</p>
          <hr />
          <br />
          <button className='bg-black p-2 w-[40%] rounded text-white font-bold'>Start Trial</button>
        </div>



          {/* third-contain */}
        <div className="shadow-xl h-[500px] my-4  hover:scale-105 duration-500 text-center p-5">
          <h1 className='text-center  font-bold text-3xl'>Web Devlopment</h1>
          <br />
          <h2 className='font-bold text-3xl'>$149</h2>
          <br />
          <p className='mt-4 mb-2 font-semibold'>Lorem ipsum is simply.</p>
          <hr />
          <p className='mt-4 mb-2 w-[80%] ml-[35px] font-semibold'>Lorem, ipsum is Simply dummy textof the printing</p>
          <hr />
          <p className='mt-4 mb-2 font-semibold'>Lorem ipsum is simply dumm.</p>
          <hr />
          <br />
          <button className='bg-green-400 p-2 w-[40%] rounded text-white font-bold'>Start Trial</button>

        </div>
      </div>
    </div>
  );
}