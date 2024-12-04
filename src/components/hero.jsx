import React from 'react'


function Hero() {
  return (
    <article className='px-[--pdx] h-screen bg-[--nav] p-[2em] '>
        <section className='flex justify-between items-center'>
            <div className='w-full px-[--pdx]'>
                <h2 className='text-[2.5rem] audio font-extrabold'>I Provide Client with the Best Services</h2>
            
            </div>
            <div className='w-full'>
                <p className='pop text-[0.9rem] text-[--gray] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quos praesentium cupiditate fuga. Eos temporibus ut ratione, aut quia accusantium in, aliquid nam incidunt omnis, laborum reprehenderit iure architecto voluptatibus.</p>
            </div>
        </section>
    </article>
  )
}

export default Hero