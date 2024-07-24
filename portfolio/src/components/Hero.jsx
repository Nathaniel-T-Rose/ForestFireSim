import React from 'react'
import {WizardCanvas} from '.';
const Hero = ({scrollContainer}) => {
  return (
    <div className=''>
      <div id='hero' className='header' >
        <div className='header_content absolute top-[10%] sm:top-[16%] lg:top-[24%]
        w-full mx-auto lg:pl-[38vh] lg:pr-[30vh] xl:pl-96 xl:pr-72 2xl:px-40 3xl:px-60 flex
        flex-col lg:flex-row items-start z-10'>
        <div className="flex-1 lg:mb-0">
          <h1 className='font-medium text-white text-[40px] xs:text-[50px] sm:text-[68px]
          md:text-[80px] lg:text-[100px] 2xl:text-[180px] leading-[100px] 2xl:leading-[150px]'>
            Nathaniel Rose 
          </h1>
        </div>
        </div>
        
        <img src='src/assets/background.png' alt='' 
             className='header_green'
        />
        <WizardCanvas scrollContainer={scrollContainer} />
    </div>
    </div>
  )
}

export default Hero
