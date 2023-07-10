/* eslint-disable no-unused-vars */
// import images
import Hero_person from './assets/images/Hero/person.png'

import figma from './assets/images/Skills/figma.png'
import vercel from './assets/images/Skills/vercel.png'
import redux from './assets/images/Skills/redux.png'
import reactjs from './assets/images/Skills/react.png'
import tailwind from './assets/images/Skills/tailwind.png'
import python from './assets/images/Skills/python.png'

import services_logo1 from './assets/images/Services/logo1.png'
import services_logo2 from './assets/images/Services/logo2.png'
import services_logo3 from './assets/images/Services/logo3.png'

import project1 from './assets/images/projects/img1.png'
import project2 from './assets/images/projects/img2.png'
import project3 from './assets/images/projects/img3.png'
import person_project from './assets/images/projects/person.png'

import avatar1 from './assets/images/Testimonials/avatar1.png'
import avatar2 from './assets/images/Testimonials/avatar2.png'
import avatar3 from './assets/images/Testimonials/avatar3.png'
import avatar4 from './assets/images/Testimonials/avatar4.png'

import Hireme_person from './assets/images/Hireme/person.png'
import Hireme_person2 from './assets/images/Hireme/person2.png'

// import icons from react-icons
import { GrMail } from 'react-icons/gr'
import { MdArrowForward, MdCall } from 'react-icons/md'
import { BsInstagram } from 'react-icons/bs'
import { TbSmartHome } from 'react-icons/tb'
import { BiUser } from 'react-icons/bi'
import { RiServiceLine, RiProjectorLine } from 'react-icons/ri'
import { MdOutlinePermContactCalendar } from 'react-icons/md'

export const content = {
  nav: [
    {
      link: '#home',
      icon: TbSmartHome
    },
    {
      link: '#skills',
      icon: BiUser
    },
    {
      link: '#services',
      icon: RiServiceLine
    },
    {
      link: '#projects',
      icon: RiProjectorLine
    },
    {
      link: '#contact',
      icon: MdOutlinePermContactCalendar
    }
  ],
  hero: {
    title: 'FE Developer',
    firstName: 'Ngô',
    LastName: 'Khoa',
    btnText: 'Hire Me',
    image: Hero_person,
    hero_content: [
      {
        count: '1+',
        text: 'In FE development'
      },
      {
        count: '4+',
        text: 'Projects Worked in my career'
      }
    ]
  },
  skills: {
    title: 'Skills',
    subtitle: 'MY TOP SKILLS',
    skills_content: [
      {
        name: 'Figma',
        para: 'Lorem ipsum text  dummy',
        logo: figma
      },
      {
        name: 'Tailwind CSS',
        para: 'Lorem ipsum text  dummy',
        logo: tailwind
      },
      {
        name: 'React js',
        para: 'Lorem ipsum text  dummy',
        logo: reactjs
      },
      {
        name: 'Redux js',
        para: 'Lorem ipsum text  dummy',
        logo: redux
      },

      {
        name: 'Vercel',
        para: 'Lorem ipsum text  dummy',
        logo: vercel
      },
      {
        name: 'Python',
        para: 'Lorem ipsum text  dummy',
        logo: python
      }
    ],
    icon: MdArrowForward
  },
  services: {
    title: 'Services',
    subtitle: 'WHAT I OFFER',
    service_content: [
      {
        title: 'Web Development',
        para: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean',
        logo: services_logo1
      },
      {
        title: 'ui / ux DESIGNING',
        para: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean',
        logo: services_logo2
      },
      {
        title: 'PhotoShop Editing',
        para: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean',
        logo: services_logo3
      }
    ]
  },
  Projects: {
    title: 'Projects',
    subtitle: 'MY CREATION',
    image: person_project,
    project_content: [
      {
        title: 'Gym Website',
        image: project1
      },
      {
        title: 'Social Media web',
        image: project2
      },
      {
        title: 'Creative Website',
        image: project3
      }
    ]
  },
  Testimonials: {
    title: 'Testimonials',
    subtitle: 'MY CLIENT REVIEWS',
    testimonials_content: [
      {
        review: '“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”',
        img: avatar1,
        name: 'JOHN DOE'
      },
      {
        review: '“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”',
        img: avatar2,
        name: 'Tom Alex'
      },
      {
        review: '“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”',
        img: avatar3,
        name: 'Johnny'
      },
      {
        review: '“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”',
        img: avatar4,
        name: 'ROBBIN'
      }
    ]
  },
  Hireme: {
    title: 'Hire Me',
    subtitle: 'FOR YOUR PROJECTS',
    image1: Hireme_person,
    image2: Hireme_person2,
    para: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean',
    btnText: 'Hire Me'
  },
  Contact: {
    title: 'Contect Me',
    subtitle: 'GET IN TOUCH',
    social_media: [
      {
        text: 'kakashi21042001@gmail.com',
        icon: GrMail,
        link: 'kakashi21042001@gmail.com'
      },
      {
        text: '+84935552021',
        icon: MdCall,
        link: 'https://wa.me/0935552021'
      },
      {
        text: 'khoatan214',
        icon: BsInstagram,
        link: 'https://www.instagram.com/khoatann214/'
      }
    ]
  },
  Footer: {
    text: 'All © Copy Right Reserved 2023'
  }
}
