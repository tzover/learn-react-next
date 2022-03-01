import type { NextPage } from 'next'
// styling
import styles from '../../styles/globalRouterChild.module.css'
// components
import Layout from '../../components/templates/Layout'
import { useRouter } from 'next/router'

const Route2: NextPage = () => {
  const router = useRouter()
  return (
    <Layout pageTitle={'NextJS Practices'} appName={'NextJS Practice'}>
      <div className={styles.container}>
        <p className={styles.msg}>route/router2.tsx</p>
        <div className={styles.button_container}>
          <button type='button' onClick={() => router.push('/')}>
            Home
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default Route2
