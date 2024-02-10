import { useState } from 'react'
import SideNav from './components/SideNav'
import Main from './components/Main'
import About from './components/About'
import ProjectWork from './components/ProjectWork'
import Contact from './components/Contact'


function App() {
  return (
    
      <div>
        
        <SideNav/>
        <Main/>
        <About/>
        <ProjectWork/>
        <Contact/>
      </div>
    
  )
}

export default App
