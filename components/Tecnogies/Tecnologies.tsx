import { BiLogoReact, BiLogoTailwindCss, BiLogoPostgresql } from 'react-icons/bi'
import { SiRedux, SiTypescript } from 'react-icons/si'
import { FaCss3Alt } from 'react-icons/fa'
import { AiFillHtml5 } from 'react-icons/ai'
import { BsFillBootstrapFill, BsGit } from 'react-icons/bs'
import { IoLogoNodejs } from 'react-icons/io'
import { TbBrandNextjs } from 'react-icons/tb'
import styles from './Tecnologies.module.css'
import Title from '../Title/Title'

const Tecnologies = () => {
  return (
    <>
    <div className={styles.bg} id='section-2'>
        <Title title='Con conocimientos en'/>
        <div className={`${styles.ti} mb-10`}>
          <div className='flex justify-center'>
           <BiLogoReact className={styles.icons}/>
          </div>
          <div className='flex justify-center'>
           <FaCss3Alt className={styles.icons}/>
          </div>
          <div className='flex justify-center'>
           <AiFillHtml5 className={styles.icons}/>
          </div>
          <div className='flex justify-center'>
            <BsFillBootstrapFill className={styles.icons}/>
          </div>
          <div className='flex justify-center'>
            <IoLogoNodejs className={styles.icons}/>
          </div>
          <div className='flex justify-center'>
            <BiLogoPostgresql className={styles.icons}/>
          </div>
          <div className='flex justify-center'>
           <SiRedux className={styles.icons}/>
          </div>
          <div className='flex justify-center'>
           <BsGit className={styles.icons}/>
          </div>
        </div>
      </div>
    <div>
      <Title title='Aprendiendo'/>
      <div className={styles.ti}>
        <div className='flex justify-center items-center'>
          <TbBrandNextjs className={`${styles.icons} ${styles.iconLearn}`}/>
        </div>
        <div className='flex justify-center items-center'>
          <SiTypescript className={`${styles.icons} ${styles.iconLearn}`}/>
        </div>
        <div className='flex justify-center items-center'>
          <BiLogoTailwindCss className={`${styles.icons} ${styles.iconLearn}`}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Tecnologies
