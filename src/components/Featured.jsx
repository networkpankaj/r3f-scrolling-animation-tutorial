import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'  // For checkmark icon

const Featured = () => {
  return (
    <div className='w-full h-screen  bg-[#3B67B6]'>
      <div className="w-full px-6 sm:px-20 border-b-[1px] border-[#afb9c9] pb-20 pt-20">
        <h1 className='text-4xl sm:text-6xl text-white font-bold tracking-tight'>Our Pricing Plans</h1>
      </div>

      <div className='w-full h-screenpx-6 sm:px-20 flex justify-center pb-10 '>
        <div className="cards w-full flex flex-col sm:flex-row gap-10 mt-10">
          {/* Monthly Plan Card */}
          <div className="cardcontainer relative w-full sm:w-1/3 flex flex-col justify-between">
            <div className="card w-full h-full rounded-xl bg-[#f8efe5] flex flex-col justify-between">
              <div className="w-full flex flex-col justify-start items-center text-center p-6 sm:p-8">
                <h1 className='text-zinc-900 text-4xl sm:text-6xl font-bold mb-4'>Free</h1>
                <h2 className="text-zinc-900 text-2xl sm:text-4xl font-bold mb-4">$0</h2>
                <p className="text-zinc-900 text-lg sm:text-xl mb-6">Per Month</p>
                <div className="border-b-2 border-zinc-300 w-full mb-6"></div>
                <ul className="text-zinc-900 text-base sm:text-lg mb-8 space-y-4">
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Requirement Analysis</li>
                  <li>AI Strategy Development</li>
                  <li>AI Solution Design</li>
                  <li>Data Preparation</li>
                  <li>Performance Evaluation</li>
                </ul>
                <button className="text-white bg-[#3B67B6] px-8 py-3 rounded-full font-semibold hover:bg-[#3B67B6] transition-all">Choose Plan</button>
              </div>
            </div>
          </div>

          {/* Annually Plan Card */}
          <div className="cardcontainer relative w-full sm:w-1/3 flex flex-col justify-between">
            <div className="card w-full h-full rounded-xl bg-[#f8efe5] flex flex-col justify-between">
              <div className="w-full flex flex-col justify-start items-center text-center p-6 sm:p-8">
                <h1 className='text-zinc-900 text-4xl sm:text-6xl font-bold mb-4'>Standard</h1>
                <h2 className="text-zinc-900 text-2xl sm:text-4xl font-bold mb-4">$99.99</h2>
                <p className="text-zinc-900 text-lg sm:text-xl mb-6">Per Year</p>
                <div className="border-b-2 border-zinc-300 w-full mb-6"></div>
                <ul className="text-zinc-900 text-base sm:text-lg mb-8 space-y-4">
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Requirement Analysis</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> AI Strategy Development</li>
                  <li>AI Solution Design</li>
                  <li>Data Preparation</li>
                  <li>Performance Evaluation</li>
                </ul>
                <button className="text-white bg-[#3B67B6] px-8 py-3 rounded-full font-semibold hover:bg-[#3B67B6] transition-all">Choose Plan</button>
              </div>
            </div>
          </div>

          {/* Medium Plan Card */}
          <div className="cardcontainer relative w-full sm:w-1/3 flex flex-col justify-between">
            <div className="card w-full h-full rounded-xl bg-[#f8efe5] flex flex-col justify-between">
              <div className="w-full flex flex-col justify-start items-center text-center p-6 sm:p-8">
                <h1 className='text-zinc-900 text-4xl sm:text-6xl font-bold mb-4'>Advanced</h1>
                <h2 className="text-zinc-900 text-2xl sm:text-4xl font-bold mb-4">$29.99</h2>
                <p className="text-zinc-900 text-lg sm:text-xl mb-6">Per Month</p>
                <div className="border-b-2 border-zinc-300 w-full mb-6"></div>
                <ul className="text-zinc-900 text-base sm:text-lg mb-8 space-y-4">
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Requirement Analysis</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> AI Strategy Development</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> AI Solution Design</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Data Preparation</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Performance Evaluation</li>
                </ul>
                <button className="text-white bg-[#3B67B6] px-8 py-3 rounded-full font-semibold hover:bg-[#3B67B6] transition-all">Choose Plan</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Featured
