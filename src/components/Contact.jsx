/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { createElement, useRef } from 'react'
import { content } from '../Content'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'
const Contact = () => {
  const { Contact } = content
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_kyqodkh', 'template_crwrrtt', form.current, 'd7NqazpazxlFem3aX').then(
      (result) => {
        console.log(result.text)
        // clear all input fields values
        form.current.reset()
        // Success
        toast.success('Email sent successfully')
      },
      (error) => {
        console.log(error.text)
        toast.error('Email sent failed')
      }
    )
  }
  return (
    <section id='contact' className='bg-dark_primary text-white'>
      <Toaster position='top-right' reverseOrder={false} />
      <div className='md:container px-5 py-14'>
        <h2 className='title !text-white' data-aos='fade-down'>
          {Contact.title}
        </h2>
        <h4 className='subtitle' data-aos='fade-down'>
          {Contact.subtitle}
        </h4>
        <br />
        <div className='flex gap-10 md:flex-row flex-col'>
          <form action='' ref={form} onSubmit={sendEmail} className='flex-1 flex flex-col gap-5' data-aos='fade-up'>
            <input
              type='text'
              name='from_name'
              placeholder='Name'
              required
              className='border border-slate-600 p-3 rounded'
            />
            <input
              type='email'
              name='user_email'
              pattern='[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$'
              placeholder='Email Id'
              required
              className='border border-slate-600 p-3 rounded'
            />
            <textarea
              name='message'
              placeholder='Message'
              className='border border-slate-600 p-3 rounded h-44'
              required
            ></textarea>
            <button className='btn self-start bg-white text-dark_primary'>Submit</button>
          </form>
          <div className='flex flex-1 flex-col gap-5'>
            {Contact.social_media.map((content, i) => (
              <div key={i} className='flex items-center gap-2' data-aos='fade-down' data-aos-delay={i * 430}>
                <h4 className='text-white'>{createElement(content.icon)}</h4>
                <a href={content.link} className='font-Poppins'>
                  {content.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
