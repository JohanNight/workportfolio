import React from 'react'
import ProjectsItem from './ProjectsItem'
import animationMakingImg from '../assets/animationMaking.png'
import digitalDrawingImg from '../assets/johnAnthony_output3.jpg'
import gameCreateImg from '../assets/gameCreate.jpg'
import websiteDevelopingImg from '../assets/websiteDeveloping.jpg'



const ProjectWork = () => {
  return (
    <div id="projects" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16' >
        <h1 className='text-4xl font-bold text-center text-[#001b5e] capitalize'>Projects</h1>
        <p className='text-center py-8 sm:text-lg text-sm m-auto p-2 '>Enter a realm where imagination has no boundaries. I showcase a wide range of skills in this portfolio of work, covering the fields of digital arts, game development, animation, and web development. Every project I work on is an expression of my love for creativity and commitment to creating unique experiences. </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectsItem img={animationMakingImg} title='Animation'/>
        <ProjectsItem img={digitalDrawingImg} title= 'Digital Drawing'/>
        <ProjectsItem img={gameCreateImg} title='Game Development'/>
        <ProjectsItem img={websiteDevelopingImg } title='Website Development'/>
      </div>
    </div>
  )
}

export default ProjectWork
