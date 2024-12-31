import React from 'react'

const About = () => {
  return (
    <div  className='w-full p-20 bg-white rounded-tl-3xl rounded-tr-3xl  text-black'>

        <h1 className='font-[Neue_Montreal] text-[3vw] leading-[4.5vw] tracking-tight'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque pariatur animi provident similique nesciunt alias et voluptates nemo odit quasi tenetur, numquam odio accusamus harum mollitia quas dolorum iusto delectus?
        </h1>

        <div className='w-full flex gap-5 border-t-[2px] mt-20 border-[#73675d]'>
          <div className='w-1/2 mt-4'>
          <h1 className='text-7xl'>OUR APPROACH</h1>
          <button className='flex uppercase items-center gap-10 px-10 py-6 bg-zinc-900  mt-10 rounded-full text-white'>Read More
             <div className='w-3 h-3 bg-red-100 rounded-full'>
            </div>
            </button>
          </div>
          <div className='w-1/2 h-[70vh] mt-4 rounded-3xl bg-[#3B67B6] flex items-center justify-center'>
          <img src="/public/images/octopus-removebg-preview.png" alt="" /></div>
        </div>
    </div>
  )
}
export default About