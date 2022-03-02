import type { NextPage } from 'next'
import { useRouter } from 'next/router'

// styling
import styles from '../styles/404.module.css'

// components
import Layout from '../components/templates/Layout'

const PageNotFound: NextPage = () => {
  const router = useRouter()
  return (
    <Layout pageTitle={'NextJS Practices'} appName={'NextJS Practice'}>
      <div className={styles.container}>
        <p className={styles.msg}>PageNotFound</p>
        <div className={styles.button_container}>
          <button type='button' onClick={() => router.push('/')}>
            Home
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default PageNotFound
