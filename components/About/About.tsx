import { edwin } from '@/Variables/Variables'
import styles from './About.module.css'
import { MdLocationPin } from 'react-icons/md'
const About = () => {
  return (
    <>
        <article className={`${styles.root}`}>
          <div className='flex gap-2'>
            <MdLocationPin/>
            <span>
              {edwin.sobreMi.Ubicación}
            </span>
          </div>
        </article>
    </>
  )
}

export default About
