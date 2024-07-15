import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {FaTwitter,FaFacebookF,FaLinkedinIn, FaInstagram} from 'react-icons/fa'


const Main = () => {
  return (
    <div id="main">
      <img className='w-full h-screen object-cover object-left' src="/images/bridge.jpg" alt="" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/30'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center '>
                <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'> I'm John Anthony Suelila</h1>
                <h2 className='flex sm:text-3xl pt-4 text-gray-800'>I'm a

                    <TypeAnimation sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Game Developer',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Web Developer',
                        2000,
                        'Programmer',
                        2000,
                        'Digital Illustrator',
                        2000,
                        'Animator',
                        2000
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '1em', paddingLeft:'5px' }}
                    repeat={Infinity}
                    cursor={true}
                    />
                </h2>
                <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                    <FaFacebookF className="cursor-pointer" size={20}/>
                    <FaInstagram className="cursor-pointer" size={20}/>
                    <FaTwitter className="cursor-pointer" size={20}/>
                    <a href="http://www.linkedin.com/in/john-anthony-suelila-00a44826a"><FaLinkedinIn className="cursor-pointer" size={20}/></a>
                 </div>
             </div>
             
        
        </div>
    </div>
  )
}

export default Main
