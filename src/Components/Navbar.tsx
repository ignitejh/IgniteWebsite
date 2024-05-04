import { colors } from '@/utils/colors'
import { navbar } from '@/utils/constant'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-[100%] sticky top-2 justify-center items-center flex flex-1 p-3 z-20'>
      <div className={`min-w-[60%] h-[auto] flex flex-wrap justify-center items-center gap-6 p-2 rounded-full text-white bg-[#C92842] `}>
        {
          navbar.map((item, index) => (
            <Link 
              className={`p-[8px] rounded-[20px] px-5 hover:bg-[white] hover:text-[#C92842] ease-in-out transition-all  font-semibold capitalize `}
            href={item.link} key={index}>{item.label}</Link>
          ))
        }
      </div>
    </div>
  )
}

export default Navbar