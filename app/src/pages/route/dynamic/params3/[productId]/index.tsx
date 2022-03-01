import type { NextPage } from 'next'
// styling
import styles from '../../../../../styles/globalRouterChild.module.css'
// components
import Layout from '../../../../../components/templates/Layout'
import { useRouter } from 'next/router'

const ProductDetail: NextPage = () => {
  const router = useRouter()
  const productId = router.query.productId
  return (
    <Layout pageTitle={'NextJS Practices'} appName={'NextJS Practice'}>
      <div className={styles.container}>
        <p className={styles.msg}>route/dynamic/params3/index.tsx</p>
        <div className={styles.params_container}>
          <p>ProductId : {productId}</p>
        </div>
        <div className={styles.button_container}>
          <button type='button' onClick={() => router.push('/')}>
            Home
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default ProductDetail
