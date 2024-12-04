import React from 'react'
import Nav from '../components/nav'
import { FaBars, FaGithub, FaTimes, FaTwitter } from 'react-icons/fa'


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

                    <button className='text-[1.2rem p-[10px] px-[20px] bg-blue-500 rounded-[5px] text-[--bg] mt-[1em] capitalize pop'>
                        Let's Start a project Together
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
            <section className='w-full h-full'>

            </section>
        </section>
    </article>
  )
}

export default Home