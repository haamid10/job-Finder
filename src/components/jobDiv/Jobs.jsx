import React from 'react'
import {BiTimeFive} from 'react-icons/bi'
import Hyundai from '../../assets/Hyundai.png'
import Intel from '../../assets/Intel-logo.png'
import google from '../../assets/google-logo.png'
import Samsung from '../../assets/samsung.png'



const Data =[
  {
    id:1,
    Image: Hyundai,
    title: 'web Developer',
    time: 'Now',
    location: 'canada',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Iste tempora!',
    company: 'Hyundai'
  },
  {
    id:2,
    Image: google,
    title: 'Senior Software eng',
    time: 'Now',
    location: 'USA',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Iste tempora!',
    company: 'Google'
  },
  {
    id:3,
    Image: Samsung,
    title: 'UI Designer',
    time: 'Now',
    location: 'USA',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Iste tempora!',
    company: 'Samsung'
  },
  {
    id:2,
    Image: Intel,
    title: 'Front-end eng',
    time: 'Now',
    location: 'Austria',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Iste tempora!',
    company: 'intel'
  },
  {
    id:1,
    Image: Hyundai,
    title: 'Back-end Eng',
    time: 'Now',
    location: 'Norway',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Iste tempora!',
    company: 'Hyundai'
  },
  {
    id:2,
    Image: google,
    title: 'Project Manager',
    time: 'Now',
    location: 'USA',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Iste tempora!',
    company: 'Google'
  },
  {
    id:3,
    Image: Samsung,
    title: 'Data Scientist',
    time: 'Now',
    location: 'Leeds',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Iste tempora!',
    company: 'Samsung'
  },
  {
    id:2,
    Image: Intel,
    title: 'Front-end developer',
    time: 'Now',
    location: 'Austria',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Iste tempora!',
    company: 'intel'
  },
]
const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
      {
        Data.map(({id,Image,title,time,location,desc,company}) => {
          return (
            <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">

            <span className='flex justify-between items-center gap-4'>
              <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1>
              <span className='flex items-center text-[#ccc] gap-1'>
                <BiTimeFive/>{time}
              </span>
            </span>
            <h6 className='text-[#ccc]'>{location}</h6>
            <p className='text-[13px] text-[#959595] border-t-[2px] pt-[20px] mt-[20px] group-hover:text-white'>{desc}</p>
  
            <div className='company flex  items-center gap-2'>
              <img src={Image} alt="intel" className='w-[30px] hover:w-[50px]' />
              <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
  
            </div>
  
            <button className='border-[2px] rounded-[10px]  block p-[10px] w-full text-14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-textColor  ' > Apply Now</button>
  
          </div>

          )
        })
      }
      
      </div>
    </div>
  )
}

export default Jobs
