'use client'
import Link from 'next/link'
import { BsLinkedin } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import { BiLogoGmail } from 'react-icons/bi'
import { useState } from 'react'
import styles from './Contacto.module.css'
const Contacto = () => {
  const [toggleContacto, setToggleContacto] = useState(false)
  const handleContact = () => {
    setToggleContacto(!toggleContacto)
  }
  return (
    <>
    <div className='flex justify-center mb-10'>
      <button onClick={handleContact} className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-slate-50  hover:bg-slate-100  focus:bg-slate-50 disabled:cursor-not-allowed disabled:border-slate-300 disabled:bg-slate-50">
        <span>Contactar</span>
      </button>
    </div>
    {
      toggleContacto && <div className={styles.ti}>
        <div className='flex justify-center'>
          <Link href={'https://www.linkedin.com/in/edwin-rodriguez-garcia-7b717a16b'} >
            <BsLinkedin className={styles.icons}/>
          </Link>
        </div>
        <div className='flex justify-center'>
          <Link href={'https://github.com/Edwuardito'} >
              <AiFillGithub className={styles.icons}/>
          </Link>
        </div>
        <div className='flex justify-center items-center'>
          <div className='flex items-center text-white'>
            <BiLogoGmail className={`${styles.mail} border rounded mr-2`}/>
            <p>a20edwin02@gmail.com</p>
          </div>
        </div>
    </div>
    }
    </>
  )
}

export default Contacto
