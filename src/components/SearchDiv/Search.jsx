import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {AiOutlineCloseCircle} from 'react-icons/ai'
const Search = () => {
  return (
    <div className=' search grid  s gap-10  bg-greyIsh rounded-[10px] p-[3rem]'>
      <form action="">
      
        <div className="firstDiv flex justify-between items-center rounded-[8px] p-5 gap-[10px] bg-white shadow-lg shadow-greyIsh">
         
          <div className=' flex gap-2 items-center'>
            <AiOutlineSearch className=' text-[25px] icon'/>
            <input type="text" className='bg-transparent text-blur-500' 
            placeholder='Search the job  Here ...'/>
            <AiOutlineCloseCircle  className='text-[25px] text-[#a5a6a6] hover:text-textColor icon'/>
          </div>

        </div>
      </form>
    </div>
  )
}

export default Search
