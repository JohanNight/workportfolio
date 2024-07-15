import React from 'react'

const About = () => {
  return (
    <div id="about" className='max-w-[1040px] h-screen m-auto md:pl-20 py-16 mb-10 sm:mb-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e] capitalize'>
            About Me
        </h1>
      <p className='text-justify sm:text-lg text-sm m-auto p-2 '>
                I am a Graduate of Bachelor of Science in Information Technoogy. Throughout my academic journey, I have been captivated by the world of
          technology and its vast applications in today’s digital age. From programming languages to
          database management. I have acquired a solid foundation in various areas of Information Technology. Driven
          by my passion for technology, I have consistently demonstrated strong work ethic,
          adaptability, and a thirst for knowledge. I have actively engaged in coursework and
          projects that have allowed me to explore different facets of Information Technology.
      </p>
      
        <img className='w-[100%] sm:w-[70vw] h-[70%] border-2 object-center' src="/images/Photo1.jpg" alt="Picture of me" />
      
      
    </div>
  )
}

export default About
