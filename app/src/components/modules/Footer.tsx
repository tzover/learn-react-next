import styles from '../../styles/modules/Footer.module.css'
import { copyright } from '../../contexts/AppBasicContext'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Powered by &copy; {copyright}</p>
    </footer>
  )
}

export default Footer
