import styles from './Title.module.css'
const Title = ({
  title
}: {
  title: string
}
) => {
  return (
    <div className={styles.root}>
        {title}
    </div>
  )
}

export default Title
