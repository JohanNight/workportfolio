import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1040px]  m-auto md:pl-20 p-4 py-16">
      <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Contact Me</h1>

      <form  action="https://formspree.io/f/moqgdqva" method='POST' encType='multipart/form-data'>

        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
          <div className='flex flex-col'>
            <label name="name" className='uppercase text-sm py-2'>Name: </label>
            <input type="text" name="name" autoComplete='off' autoSave='off' className='border-2 rounded-lg p-3 flex border-gray-300'/>
          </div>
          <div className='flex flex-col'>
            <label name="phone_number" className='uppercase text-sm py-2'>Phone Number: </label>
            <input type="text" name="phone_number" className='border-2 rounded-lg p-3 flex border-gray-300' autoComplete='off' autoSave='off'/>
          </div>
          <div className='flex flex-col py-2'>
            <label name="email" className='uppercase text-sm py-2'>Email: </label>
            <input type="email" name="email" autoComplete='off' autoSave='off'className='border-2 rounded-lg p-3 flex border-gray-300 ' />
          </div>
          <div className='flex flex-col py-2'>
            <label name="subject" className='uppercase text-sm py-2'>Subject: </label>
            <input type="text" name="subject" className='border-2 rounded-lg p-3 flex border-gray-300 '/>
          </div>
          <div className='flex flex-col py-2'>
            <label name="message" className='uppercase text-sm py-2'>Message: </label>
           <textarea className='border-2 rounded-lg p-3 border-gray-300' name='message'rows='10'></textarea>
          </div>
        </div>
        <button type="submit" className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg text-3xl'>Send Message</button>
      </form>
      
    </div>
  )
}

export default Contact
