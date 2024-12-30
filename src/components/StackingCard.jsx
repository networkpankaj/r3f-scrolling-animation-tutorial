import React, { useLayoutEffect, useRef } from 'react'
import img_1 from "../assets/support.jpg"
import img_2 from "../assets/research.jpg"
import img_3 from "../assets/hrsservices.jpg"
import "./StackingCard.css";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
const StackingCard = () => {

    const container = useRef()
    const services = [
        {
            img: img_1,
            service: "support"
        },
        {
            img: img_2,
            service: "research"
        },
        {
            img: img_3,
            service: "hrsservices"
        },
        {
            img: img_1,
            service: "support"
        },
        {
            img: img_2,
            service: "research"
        },
        {
            img: img_3,
            service: "hrsservices"
        },

    ]

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.stackingcard:not(:first-child)', { x:1000,
            rotate: -90,
            },
            {
                x:0,
                rotate: 0,
                stagger: 0.5,
                ScrollTrigger:{
                    pin: container.current,
                    scrub: 0.5
                },
            })
        });
        return () => ctx.revert()
    }, [])
  return (
    <div ref={container} className='h-screen w-full flex items-center justify-center bg-zinc-900'>
        <div className="relative w-72 h-[420px]">
            {services.map((service) => {
                return <div key={service.service} className='stackingcard'>
                    <img className='h-full w-full rounded-lg' src = {service.img} alt="" />
                    <div className="overlay">
                        <p className='text-white'>{service.service}</p>
                    </div>
                </div>
            })}

        </div>
    </div>
  )
}

export default StackingCard