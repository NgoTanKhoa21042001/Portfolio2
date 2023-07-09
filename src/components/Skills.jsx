/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { createElement, useState } from 'react'
import { content } from '../Content'
import Modal from 'react-modal'
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '23rem',
    width: '90%'
  },
  overlay: {
    padding: '2rem'
  }
}
const Skills = () => {
  const { skills } = content
  const [modalIsOpen, setIsOpen] = useState(false)
  const [selectSkill, setSelectSkill] = useState(null)
  function openModal() {
    setIsOpen(true)
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00'
  // }

  function closeModal() {
    setIsOpen(false)
  }

  Modal.setAppElement('#root')
  return (
    <section className='min-h-fit bg-bg_light_primary'>
      {/* modal */}

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
        <div className='flex items-center gap-2'>
          <img className='h-10' src={selectSkill?.logo} alt='' />
          <h6>{selectSkill?.name}</h6>
        </div>
        <br />
        <ul className='list-decimal px-4 font-Poppins sm:text-sm text-xs leading-7'>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quasi ad dicta sit placeat praesentium
            possimus molestiae eveniet nemo officiis.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quasi ad dicta sit placeat praesentium
            possimus molestiae eveniet nemo officiis.
          </li>
        </ul>
        <br />
        <div className='flex justify-end' onClick={() => closeModal()}>
          <button className='btn'>Close</button>
        </div>
      </Modal>

      <div className='md:container px-5 py-14'>
        <h2 className='title'>{skills.title}</h2>
        <h4 className='subtitle'>{skills.subtitle}</h4>
        <br />
        <div className='flex flex-wrap gap-4 justify-center'>
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              className='bg-white relative group w-full flex items-center gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200 shadow-md cursor-pointer'
              onClick={() => {
                setSelectSkill(skill)
                openModal()
              }}
            >
              <div>
                <img src={skill.logo} alt={skill.name} className='w-10 group-hover:scale-125 duration-200' />
              </div>
              <div>
                <h6>{skill.name}</h6>
                <p className='italic'>{skill.para}</p>
                <div className='text-xl absolute top-3 right-3'>{createElement(skills.icon)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
