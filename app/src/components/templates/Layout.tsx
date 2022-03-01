import { ReactNode } from 'react'
import styles from '../../styles/templates/Layout.module.css'
import Header from '../modules/Header'
import Footer from '../modules/Footer'

interface Props {
  pageTitle: string
  appName: string
  children: ReactNode
}

const Layout = (props: Props) => {
  const { pageTitle, appName, children } = props
  return (
    <>
      <div className={styles.layout}>
        <Header pageTitle={pageTitle} appName={appName} />
        <div className={styles.layout_child}>{children}</div>
      </div>
      <Footer />
    </>
  )
}

export default Layout
