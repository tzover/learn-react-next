import type { NextPage } from 'next'
// styling
import styles from '../styles/Home.module.css'
// components
import Layout from '../components/templates/Layout'
import Routing from '../components/modules/Routing'
import Rendering from '../components/modules/Rendering'
import Another from '../components/modules/Another'

const Home: NextPage = () => {
  return (
    <Layout pageTitle={'NextJS Practices'} appName={'NextJS Practice'}>
      <div className={styles.flex_container}>
        <div className={styles.flex_child}>
          <Routing />
        </div>
        <div className={styles.flex_child}>
          <Rendering />
          <Another />
        </div>
      </div>
    </Layout>
  )
}

export default Home
