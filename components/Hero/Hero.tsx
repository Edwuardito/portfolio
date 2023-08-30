import About from '../About/About'
import styles from './Hero.module.css'
const Hero = () => {
  return (
    <>
    <section className={`${styles.root} flex items-center justify-between`} id='section-1'>
        <div>
            <p>Hola, Soy Edwin Rodriguez</p>
            <br />
            <span className={`${styles.title} my-4`}>Desarrollador <br /> Frontend</span>
            <About/>
        </div>
    </section>
    </>
  )
}

export default Hero
