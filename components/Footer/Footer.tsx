import styles from './Footer.module.css'
import Link from 'next/link'
import Title from '../Title/Title'

const Footer = () => {
  return (
    <div className={styles.root} id='section-4'>
        <Title title='Certificados'/>
        <div className={styles.certificados}>
            <Link href={'https://certificates.soyhenry.com/new-cert?id=4432222a4b8fd516be97f5dc508eb387f95f4ede3ebbd6f753938b8458c4c406'}>
                <img src="https://res.cloudinary.com/dqj6dkrug/image/upload/v1693345005/ron8qtwsm5v6qaiemdp0.png" alt='certificado' width={500} height={500}/>
                <p className='text-white'>Full Stack</p>
            </Link>
            <Link href={'https://www.efset.org/cert/XdxFSS'}>
                <img src="https://res.cloudinary.com/dqj6dkrug/image/upload/v1693345006/eaoyhxfi9hw8mp1j08dm.png" alt='certificado' width={300} height={300}/>
                <p className='text-white'>Nivel de Ingles</p>
            </Link>
            <Link href={'https://distanciaitc.com/verificacertif.html'}>
                <img src="https://res.cloudinary.com/dqj6dkrug/image/upload/v1693345005/lwupo07arkzmwuuhjqqc.png" alt='certificado' width={500} height={500}/>
                <p className='text-white'>Diseño Grafico (mHOSjBf3Ej)</p>
            </Link>
            <Link href={' https://distanciaitc.com/verificacertif.html'}>
                <img src="https://res.cloudinary.com/dqj6dkrug/image/upload/v1693345006/mv1lys8u0ncib4tmzmsb.png" alt='certificado' width={500} height={300}/>
                <p className='text-white'>Marketing Digital (Hj1lpanzg7)</p>
            </Link>
        </div>
    </div>
  )
}

export default Footer
