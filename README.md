# r3f-scrolling-animation-tutorial

![image](https://user-images.githubusercontent.com/6551176/216549194-a1cf4bc0-db5b-4773-aebc-7db5ce0d3459.png)


Link to the YouTube tutorial 

https://youtu.be/pXpckHDDNYo


Demo link

https://codesandbox.io/p/github/wass08/r3f-scrolling-animation-tutorial/draft/icy-platform?file=%2Fsrc%2FApp.jsx

import React from 'react';

const Header = () => {
  return (
    <div className={`
      w-full px-20 py-8  
      flex justify-between items-center bg-white
    `}>
      <div className='logo'>
        <img 
          src="https://isuremedia.com/wp-content/uploads/2022/07/isurelogo-320by110.-1-300x103-1.webp" 
          alt="Logo" 
          width={140} 
        />
      </div>
      {/* <div className='links text-xl flex gap-10'>
        {["Services", "Our Work", "About Us", "Insights", "Contact"].map((item, index) => (
          <a 
            key={index} 
            className={`
              text-2xl capitalize font-light cursor-pointer
              text-zinc-800 hover:text-[#3B67B6]  // Simple color change on hover
             
            `}
          >
            {item}
          </a>
        ))}
      </div> */}
      
      {/* Add Button */}
      <button className={`
        text-xl font-semibold text-white bg-[#3B67B6] px-6 py-2 rounded-full 
        hover:bg-[#2a4b91] transition-all duration-300 ease-in-out
      `}>
        Get Started
      </button>
    </div>
  );
};

export default Header;

import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const Intro = () => {
  // Refs for animation targets
  const welcomeRef = useRef(null);
  const virtualRef = useRef(null);
  const octopusRef = useRef(null);
  const typewriterRef = useRef(null);
  const descriptionRef = useRef(null);

  // Existing typing animation states
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const words = ['Developer', 'Designer', 'Coder'];
  const [delta, setDelta] = useState(200);

  // Enhanced GSAP Animation with smoother transitions
  useEffect(() => {
    const tl = gsap.timeline({ 
      defaults: { 
        ease: "power2.out",  // Changed to smoother easing
        duration: 1.2        // Slightly longer duration
      } 
    });

    // Add gradient animation to the background
    gsap.fromTo(".gradient-bg",
      {
        backgroundImage: "linear-gradient(to top, rgba(253, 247, 236, 0.7) 0%, transparent 100%)",
        opacity: 0,
        y: "100%"
      },
      {
        opacity: 1,
        y: "0%",
        duration: 1.5,
        ease: "power2.inOut"
      }
    );

    tl.fromTo(welcomeRef.current,
      { 
        y: 30, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1,
        ease: "power3.inOut"  // Smoother easing for first element
      }
    )
    .fromTo(virtualRef.current,
      { 
        y: 60,               // Changed from x to y for consistency
        opacity: 0,
        scale: 0.95         // Slight scale effect
      },
      { 
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.4,
        ease: "expo.out"    // Very smooth easing
      },
      "-=0.7"              // Adjusted overlap
    )
    .fromTo(octopusRef.current,
      { 
        y: 60,
        opacity: 0,
        scale: 0.95
      },
      { 
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.4,
        ease: "expo.out"
      },
      "-=1.2"              // More overlap for connected feel
    )
    .fromTo(typewriterRef.current,
      { 
        y: 20, 
        opacity: 0,
        scale: 0.98
      },
      { 
        y: 0, 
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out"
      },
      "-=0.8"
    )
    .fromTo(descriptionRef.current,
      { 
        y: 30, 
        opacity: 0,
        scale: 0.98
      },
      { 
        y: 0, 
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out"
      },
      "-=0.8"
    );

    // Optional: Add a smooth reveal to the entire section
    gsap.fromTo(".textstructure",
      { 
        opacity: 0.8,
        scale: 0.98 
      },
      { 
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power2.out"
      }
    );

    // Add floating animation to the background squares
    gsap.to(".floating-bg", {
      y: -20,
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      stagger: {
        each: 0.2,
        from: "start"
      }
    });

  }, []);

  // Existing typing animation useEffect and tick function
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(ticker);
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % words.length;
    let fullText = words[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 1.2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(200);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(200);
    }
  };

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className=' w-full h-screen bg-white pt-2 relative overflow-hidden'> 
      {/* Add gradient overlay */}
      <div className="gradient-bg absolute inset-0 pointer-events-none" />
      
      <div className='flex justify-between items-center px-20 py-20'>
        {/* Text Section */}
        <div className='textstructure  w-1/2 relative z-10'>
          <p ref={welcomeRef} className='text-2xl text-zinc-800 mb-8 font-light opacity-0'>
            Welcome to our creative world
          </p>
          <div className='masker mb-4'>
            <h1 
              ref={virtualRef}
              className=' uppercase text-8xl tracking-tighter font-bold leading-[5vw] text-[#3B67B6] opacity-0'
            >
              Virtual
            </h1>
          </div>
          <div className='masker mb-8'>
            <h1 
              ref={octopusRef}
              className=' uppercase text-8xl text-zinc-800 font-bold opacity-0'
            >
              Octopus
            </h1>
          </div>
          <div 
            ref={typewriterRef} 
            className='flex items-center gap-2 mt-8 mb-8 opacity-0'
          >
            <p className='text-2xl text-black'>I am a</p>
            <p className='text-2xl font-semibold text-[#3B67B6] min-w-[120px]'>
              {text}
              <span className='animate-blink'>|</span>
            </p>
          </div>
          <p 
            ref={descriptionRef}
            className='mt-8 text-gray-600 max-w-md text-[18px] leading-relaxed opacity-0'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className=" text-white mt-10 px-8 py-3 rounded-full font-medium bg-blue-600 hover:bg-blue-500 transition-all">
          START FOR FREE
        </button>
        </div>
  
        {/* Replacing Image Section with styled background */}
        <div className='w-1/2  pl-10 relative z-10'>
          <img src="../../public/images/octopus-removebg-preview.png" alt="" />
          
      </div>
    </div>
    </div>

  );
};



export default Intro;

import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'  // For checkmark icon

const Featured = () => {
  const cards = [useAnimation(), useAnimation(), useAnimation()]

  const handleHover = (index) => {
    cards[index].start({ y: "0%" })
  }

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" })
  }

  return (
    <div className='w-full py-20 bg-zinc-900'>
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className='text-6xl text-white font-bold tracking-tight'>Our Pricing Plans</h1>
      </div>

      <div className='px-20'>
        <div className="cards w-full flex gap-10 mt-10">
          {/* Monthly Plan Card */}
          <motion.div 
            onHoverStart={() => handleHover(0)} 
            onHoverEnd={() => handleHoverEnd(0)} 
            className="cardcontainer relative w-1/3 h-[80vh]"
          >
            <h1 className='absolute flex overflow-hidden right-0 translate-x-1/2 top-4 -translate-y-1/2 z-[9] leading-none tracking-tighter text-5xl text-[#40413d]'>
              {"Monthly".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                  className='inline-block'
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl bg-[#f8efe5] flex flex-col justify-between">
              <div className="w-full h-full flex flex-col justify-start items-center text-center p-8">
                <h1 className='text-zinc-900 text-6xl font-bold mb-4'>Free</h1>
                <h2 className="text-zinc-900 text-4xl font-bold mb-4">$0</h2>
                <p className="text-zinc-900 text-xl mb-6">Per Month</p>
                <div className="border-b-2 border-zinc-300 w-full mb-6"></div> {/* Border under "Per Month" */}
                <ul className="text-zinc-900 text-lg mb-8 space-y-4">
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Requirement Analysis</li>
                  <li>AI Strategy Development</li>
                  <li>AI Solution Design</li>
                  <li>Data Preparation</li>
                  <li>Performance Evaluation</li>
                </ul>
                <button className="text-white bg-[#3B67B6] px-8 py-3 rounded-full font-semibold hover:bg-[#3B67B6] transition-all">Choose Plan</button>
              </div>
            </div>
          </motion.div>

          {/* Annually Plan Card */}
          <motion.div 
            onHoverStart={() => handleHover(1)} 
            onHoverEnd={() => handleHoverEnd(1)}  
            className="cardcontainer relative w-1/3 h-[80vh]"
          >
            <h1 className='absolute flex overflow-hidden right-full translate-x-1/2 top-4 -translate-y-1/2 z-[9] leading-none tracking-tighter text-5xl text-[#95978d]'>
              {"Annually".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                  className='inline-block'
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl bg-[#f8efe5] flex flex-col justify-between">
              <div className="w-full h-full flex flex-col justify-start items-center text-center p-8">
                <h1 className='text-zinc-900 text-6xl font-bold mb-4'>Standard</h1>
                <h2 className="text-zinc-900 text-4xl font-bold mb-4">$99.99</h2>
                <p className="text-zinc-900 text-xl mb-6">Per Year</p>
                <div className="border-b-2 border-zinc-300 w-full mb-6"></div> {/* Border under "Per Month" */}
                <ul className="text-zinc-900 text-lg mb-8 space-y-4">
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Requirement Analysis</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> AI Strategy Development</li>
                  <li>AI Solution Design</li>
                  <li>Data Preparation</li>
                  <li>Performance Evaluation</li>
                </ul>
                <button className="text-white bg-[#3B67B6] px-8 py-3 rounded-full font-semibold hover:bg-[#3B67B6] transition-all">Choose Plan</button>
              </div>
            </div>
          </motion.div>

          {/* Medium Plan Card */}
          <motion.div 
            onHoverStart={() => handleHover(2)} 
            onHoverEnd={() => handleHoverEnd(2)}  
            className="cardcontainer relative w-1/3 h-[80vh]"
          >
            <h1 className='absolute flex overflow-hidden right-full translate-x-1/2 top-4 -translate-y-1/2 z-[9] leading-none tracking-tighter text-5xl text-[#cfd2c5]'>
              {"Medium".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[2]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                  className='inline-block'
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl bg-[#f8efe5] flex flex-col justify-between">
              <div className="w-full h-full flex flex-col justify-start items-center text-center p-8">
                <h1 className='text-zinc-900 text-6xl font-bold mb-4'>Advanced</h1>
                <h2 className="text-zinc-900 text-4xl font-bold mb-4">$29.99</h2>
                <p className="text-zinc-900 text-xl mb-6">Per Month</p>
                <div className="border-b-2 border-zinc-300 w-full mb-6"></div> {/* Border under "Per Month" */}
                <ul className="text-zinc-900 text-lg mb-8 space-y-4">
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Requirement Analysis</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> AI Strategy Development</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> AI Solution Design</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Data Preparation</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Performance Evaluation</li>
                </ul>
                <button className="text-white bg-[#3B67B6] px-8 py-3 rounded-full font-semibold hover:bg-[#3B67B6] transition-all">Choose Plan</button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default Featured

