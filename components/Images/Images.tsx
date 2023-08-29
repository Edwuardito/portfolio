'use client'
import React, { useEffect, useState } from 'react'
import { zoomImg, handleImages } from '../../functions/functions'
import styles from './Images.module.css'
import { BsLink45Deg } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import Link from 'next/link'
const Images = () => {
  const [videos, setVideos] = useState([])
  const [hero, setHero] = useState([
    'https://res.cloudinary.com/dqj6dkrug/image/upload/v1693345026/nuk373vun19ltlctsem8.png',
    'https://res.cloudinary.com/dqj6dkrug/image/upload/v1693345025/djpaibmt2aurtqtm6bwy.png',
    'https://res.cloudinary.com/dqj6dkrug/image/upload/v1693345024/dctdqltcpxwm76dzkrpj.png',
    'https://res.cloudinary.com/dqj6dkrug/image/upload/v1693345024/dctdqltcpxwm76dzkrpj.png',
    'https://res.cloudinary.com/dqj6dkrug/image/upload/v1693345024/ssq2bnquwctoe81oyi25.png'
  ])
  const imgs = [
    {
      direccion: 'https://res.cloudinary.com/dqj6dkrug/image/upload/v1693345005/fc6g9hwijdghp2tbtocv.png',
      deploy: 'https://clon-netflix-by-edwin.netlify.app',
      enlace: 'https://github.com/Edwuardito/netflix.git',
      videos: [],
      images: [
        'https://res.cloudinary.com/dqj6dkrug/image/upload/v1693345026/nuk373vun19ltlctsem8.png',
        'https://res.cloudinary.com/dqj6dkrug/image/upload/v1693345025/djpaibmt2aurtqtm6bwy.png',
        'https://res.cloudinary.com/dqj6dkrug/image/upload/v1693345024/dctdqltcpxwm76dzkrpj.png',
        'https://res.cloudinary.com/dqj6dkrug/image/upload/v1693345024/dctdqltcpxwm76dzkrpj.png',
        'https://res.cloudinary.com/dqj6dkrug/image/upload/v1693345024/ssq2bnquwctoe81oyi25.png'
      ]
    },
    {
      direccion: 'https://res.cloudinary.com/dqj6dkrug/image/upload/v1693345005/dtry171uqarz7hppgtwd.jpg',
      deploy: '',
      enlace: 'https://github.com/Galy77/PF-Grupo-20.git',
      videos: ['https://res.cloudinary.com/dqj6dkrug/video/upload/v1693339951/qcqmqtbfcttoaxwta8yx.mp4'],
      images: []
    }
  ]
  useEffect(() => {
    zoomImg()
  }, [])

  return (
        <div className='flex-col'>
            <div className={(hero.length > 0) ? styles.posters : styles.video}>
              {
              videos.map(el => {
                return (
                  <video key={el} width={1000} height={350} controls autoPlay muted>
                    <source src={el}/>
                  </video>
                )
              })
              }
              {
                hero.map(el => {
                  return (
                      <div
                        className={styles.cardHero}
                        key={el}
                        style={{
                          backgroundImage: `url(${el})`,
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          backgroundRepeat: 'none',
                          objectFit: 'contain'
                        }}
                      >
                      </div>
                  )
                })
              }
            </div>
            <div className={styles.imgs}>
              {
               imgs.map(el => {
                 return (
                  <div key={el.direccion} className='flex justify-center'>
                      <div
                        className={`${styles.card} flex justify-end items-end text-4xl m-5 p-2`}
                        style={{
                          backgroundImage: `url(${el.direccion})`,
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          backgroundRepeat: 'none',
                          objectFit: 'contain'
                        }}
                        onClick={(event) => { handleImages(event, el, setHero, styles, setVideos) }}
                      >
                        {
                          (el.deploy !== '') && <Link href={el.deploy} className='border rounded bg-slate-50'>
                          <BsLink45Deg/>
                        </Link>
                        }
                        <Link href={el.enlace} className='border rounded bg-slate-50 ml-2'>
                          <AiFillGithub/>
                        </Link>
                    </div>
                  </div>
                 )
               }
               )
              }
            </div>
        </div>
  )
}
// second commit
export default Images
