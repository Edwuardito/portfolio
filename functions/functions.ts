export const zoomImg = () => {
  const container = document.getElementById('img-container')
  const img = document.querySelector('img')
  container?.addEventListener('mousemove', (e) => {
    if (img !== null) {
      const x = e.clientX - container.offsetLeft
      const y = e.clientY - container.offsetTop
      img.style.transformOrigin = `${x}px ${y + (container.offsetTop * 0.88)}px`
      img.style.transform = 'scale(1.7)'
    }
  })
  container?.addEventListener('mouseleave', (e) => {
    if (img !== null) {
      img.style.transformOrigin = 'center'
      img.style.transform = 'scale(1)'
    }
  })
}
export const handleImages = (event: any, multimedia: any, setHero: any, styles: any, setVideos: any) => {
  // const id = event.target.id
  // const img = document.getElementById(id)
  // const imgsNode: NodeList = document.querySelectorAll('.little-img')
  // const nodeArray = Array.from(imgsNode)
  // nodeArray.forEach((el: any) => {
  //   el.classList.remove(styles.border)
  // })
  // img?.classList.add(styles.border)
  setVideos(multimedia.videos)
  setHero(multimedia.images)
}
