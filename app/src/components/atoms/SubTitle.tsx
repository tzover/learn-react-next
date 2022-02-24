import styles from '../../styles/atoms/SubTitle.module.css'

interface Props {
  title: string
}

const SubTitle = (props: Props) => {
  const { title } = props

  return <h2 className={styles.title}>{title}</h2>
}

export default SubTitle
