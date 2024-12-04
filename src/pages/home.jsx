import React from 'react'
import Nav from '../components/nav'
import { FaBars, FaGithub, FaTimes, FaTwitter } from 'react-icons/fa'
import person from "../assets/person1.png"
import Hero from '../components/hero'
import figma from "../assets/figma.png"
import python from "../assets/python.png"
import blender from "../assets/blender.png"
import { FaArrowRightLong } from "react-icons/fa6";



function Home() {
  return (
    <article>
        <Nav />

        <section className='h-screen flex items-center justify-between px-[--pdx]'>
            <section className='w-full flex flex-col justify-between h-[60%]'>
                <div className=''>
                    <div className='mt-[1em]'>
                        <h1 className='text-[3rem] pop font-extrabold line'>I Turn Designs Into Rich Experiences</h1>
                        <p className='pop text-[0.9rem] text-[--gray] mt-[1em]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla at officiis porro exercitationem libero similique totam, hic suscipit aliquam voluptatem perferendis. Quod velit possimus ipsam doloribus soluta iusto et nam.</p>
                    </div>

                    <button className='text-[1.2rem flex items-center gap-[20px] p-[10px] px-[20px] bg-blue-500 rounded-[5px] text-[--bg] mt-[1em] capitalize pop'>
                        <span>Let's Start a project Together</span>
                        <FaArrowRightLong className='text-xl' />
                    </button>
                </div>

                <ul className='flex gap-[10px] text-2xl'>
                    <li className='flex items-center pop gap-[5px]'>
                        <FaGithub />
                        <span className='text-[1rem]'>Github</span>
                    </li>
                    <li className='flex items-center pop gap-[5px]'>
                        <FaTwitter className='text-blue-500'/>
                        <span className='text-[1rem]'>Twitter</span>
                    </li>
                </ul>
            </section>
            <section className='w-full h-full flex items-center relative'>

                

                <div className=' h-[500px] w-[500px] absolute top-[4em] z-[-] bg-[--blackv] rounded-[50%] blur-[90px] bg-opacity-10'>

                </div>

                <img src={person} className='object-cover border-b-[--gray] border-b-2 bg-' alt="" />

                <ul>
                    <img className='absolute w-[70px] rounded-[50%] left-[28%] top-[25%] p-[5px] bg-white' src={figma} alt="" />
                    <img className='absolute w-[70px] rounded-[50%] left-[10%] bottom-[30%] p-[5px] bg-white' src={python} alt="" />
                    <img className='absolute w-[70px] rounded-[50%] right-[10%] bottom-[40%] p-[5px] bg-white' src={blender} alt="" />
                </ul>

                
            </section>
        </section>


        <Hero />
    </article>
  )
}

export default Home