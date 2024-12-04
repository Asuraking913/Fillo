import React from 'react'

function Nav() {
  return (
    <div className='flex items-center justify-between px-[--pdx] p-[1.2em] border-b-[--gray]  fixed top-0  w-full'>
        <a href="#" className='audio capitalize text-2xl font-bold relative'>Fillo</a>
        <ul className='flex items-center justify-between gap-[20px] pop text-[--gray]'>
            <li>Business</li>
            <li>Company Creation</li>
            <li>Services</li>
            <li>Pricing</li>
        </ul>
    </div>
  )
}

export default Nav