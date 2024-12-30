import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen bg-white items-center px-32 flex gap-5'>
        <div className="cardContainer h-[50vh] w-1/2">
            <div className="card relative rounded-xl w-full h-full bg-[#004D43] items-center justify-center flex">
                <h1 className='uppercase text-4xl text-white '>Virtual Octopus</h1>
                <button className=' text-white absolute bottom-10 left-10 px-5 py-1 rounded-full border-2'>@Try It</button>
            </div>
        </div>
        <div className="cardContainer flex gap-5 h-[50vh] w-1/2 ">
        <div className="card relative  rounded-xl w-full h-full bg-[#56716f]  flex items-center justify-center">
        <h1 className='uppercase text-2xl text-white '>Virtual Octopus</h1>
        <button className=' text-white absolute bottom-10 left-10 px-5 py-1 rounded-full border-2'>@Try It</button>
            </div>
            <div className="card relative rounded-xl w-full h-full bg-[#444646] items-center flex justify-center">
            <h1 className='uppercase text-2xl text-white '>Virtual Octopus</h1>
            <button className=' text-white absolute bottom-10 left-10 px-5 py-1 rounded-full border-2'>@Try It</button>
            </div>
            
        </div>
       
    </div>
  )
}

export default Cards