import type { NextPage } from 'next'
import { useRouter } from 'next/router'

// styling
import styles from '../../styles/globalRouterChild.module.css'

// components
import Layout from '../../components/templates/Layout'

const Route: NextPage = () => {
  const router = useRouter()
  return (
    <Layout pageTitle={'NextJS Practices'} appName={'NextJS Practice'}>
      <div className={styles.container}>
        <p className={styles.msg}>route2/index.tsx</p>
        <div className={styles.button_container}>
          <button type='button' onClick={() => router.push('/')}>
            Home
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default Route
