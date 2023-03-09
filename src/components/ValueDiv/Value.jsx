import React from 'react'
import Intel from '../../assets/Intel-logo.png'

const Value = () => {
  return (
    <div className=' mb-[4rem] mt-[6rem]' >
      <h1 className='text-textColor text-[25px] pb-[2rem] py-[2rem] font-bold w-[400px]  block '>The Value that Holds us true and to account</h1>
      <div className=' grid gap-[10rem] grid-cols-3
       items-center'>

        <div className=' SingleGrid rounded-[10pxs] hover:bg-[#eeedf7] p-[1.5rem] '>
           <div className=' flex items-center gap-3'>

            <div className=' imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] flex items-center justify-center'>
              <img src={Intel} alt=""  className='w-[40%]'/>
            </div>
            <span className='mr-16 font-semibold text-textColor text-[18px]'>Simplicity</span>
           </div>
           <p className=' text-[13px] text-textColor  opacity-[.7] py-[1rem]'>
            Things being made beautiful Simple are heart everything we do
           </p>
        </div>

        <div className=' SingleGrid rounded-[10pxs] hover:bg-[#22dc794d] p-[1.5rem] '>
           <div className=' flex items-center gap-3'>

            <div className=' imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] flex items-center justify-center'>
              <img src={Intel} alt=""  className='w-[40%]'/>
            </div>
            <span className='mr-16 font-semibold text-textColor text-[18px]'>Simplicity</span>
           </div>
           <p className=' text-[13px] text-textColor  opacity-[.7] py-[1rem]'>
            Things being made beautiful Simple are heart everything we do
           </p>
        </div>

        <div className=' SingleGrid rounded-[10pxs] hover:bg-[#c2763370] p-[1.5rem] '>
           <div className=' flex items-center gap-3'>

            <div className=' imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] flex items-center justify-center'>
              <img src={Intel} alt=""  className='w-[40%]'/>
            </div>
            <span className='mr-16 font-semibold text-textColor text-[18px]'>Simplicity</span>
           </div>
           <p className=' text-[13px] text-textColor  opacity-[.7] py-[1rem]'>
            Things being made beautiful Simple are heart everything we do
           </p>
        </div>

        

       </div>


    </div>
  )
}

export default Value
