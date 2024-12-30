import React from 'react'

const Footer = () => {
  return (
    <div className='flex gap-5 w-full h-screen bg-white p-20'>
      <div className="w-1/2 justify-between flex flex-col">
      <div className="heading">
        <h1 className='text-[6vw] font-semibold uppercase leading-none text-zinc-900 -mb-3'>Virtual-</h1>
        <h1 className='text-[6vw] font-semibold uppercase leading-none text-zinc-900 -mb-3'>Octopus</h1>
      </div>
      <div>
        <h2 className='text-zinc-900 text-xl'>Virtual Octopus</h2>
      </div>
      </div>
      <div className="w-1/2">
        <h1 className='text-[6vw] font-semibold uppercase leading-none text-zinc-900 -mb-5'>Presentation</h1>
        <div className="dets underline text-zinc-900 mt-10">
          <a className='block  font-light text-lg' href='#'>Facebook</a>
          <a className='block font-light text-lg' href='#'>Instagram</a>
          <a className='block font-light text-lg' href='#'>Twitter</a>
          <a className='block font-light text-lg' href='#'>Pinterest</a>
        </div>
        <div>
            
        </div>
        <div className="dets text-zinc-900 mt-10">
            <h1 className='text-4xl mb-5'>Contact</h1>
          <a className='block  font-light text-lg' href='#'>120 West Lancashire, England</a>
          <a className='block font-light text-lg' href='#'>support@username</a>
          <a className='block font-light text-lg' href='#'>(+91) 7878787878</a>
          
        </div>
        <div className="dets  flex gap-10 justify-between underline text-zinc-900 mt-10">
            <div className='left'>

        <h1 className='text-4xl mb-5'>Help</h1>
          <a className='block  font-light text-lg' href='#'>Privacy Policy</a>
          <a className='block font-light text-lg' href='#'>Customer Support</a>
          <a className='block font-light text-lg' href='#'>Terms & Conditions</a>
            </div>
          <div className='right'>

          <h1 className='text-4xl mb-5'>Pages</h1>
          <a className='block  font-light text-lg' href='#'>About </a>
          <a className='block font-light text-lg' href='#'>Contact</a>
          <a className='block font-light text-lg' href='#'>Projects</a>
          <a className='block font-light text-lg' href='#'>Services</a>
          
          </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default Footer