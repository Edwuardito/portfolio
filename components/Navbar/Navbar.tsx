import React from 'react'
import styles from './Navbar.module.css'
const Navbar = () => {
  return (
    <div className={styles.root}>
      {/* <button className={`${styles.underline} ${styles.Lenguage} mx-5`}>
        English
      </button> */}
      <ol className='flex'>
        <li className={`${styles.underline} mx-4 py-2 cursor-pointer`}>
          <a href="#section-1">
            Sobre mi
          </a>
        </li>
        <li className={`${styles.underline} mx-4 py-2 cursor-pointer`}>
          <a href="#section-2">
            Tecnologias
          </a>
        </li>
        <li className={`${styles.underline} mx-4 py-2 cursor-pointer`}>
          <a href="#section-3">
            Proyectos
          </a>
        </li>
        <li className={`${styles.underline} mx-4 py-2 cursor-pointer`}>
          <a href="#section-4">
            Certificados
          </a>
        </li>
      </ol>
    </div>
  )
}

export default Navbar
