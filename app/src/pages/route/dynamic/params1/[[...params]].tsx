import type { NextPage } from 'next'
import { useRouter } from 'next/router'

// styling
import styles from '../../../../styles/globalRouterChild.module.css'

// components
import Layout from '../../../../components/templates/Layout'
import PageNotFound from '../../../404'

const Param: NextPage = () => {
  const router = useRouter()
  const { params = [] } = router.query
  console.log(params)

  if (params.length === 2) {
    return (
      <Layout pageTitle={'NextJS Practices'} appName={'NextJS Practice'}>
        <div className={styles.container}>
          <p className={styles.msg}>route/dynamic/params1/[[...params]].tsx</p>
          <div className={styles.params_container}>
            <p>Params 1 : {params[0]}</p>
            <p>Params 2 : {params[1]}</p>
          </div>
          <div className={styles.button_container}>
            <button type='button' onClick={() => router.push('/')}>
              Home
            </button>
          </div>
        </div>
      </Layout>
    )
  } else if (params.length === 1) {
    return (
      <Layout pageTitle={'NextJS Practices'} appName={'NextJS Practice'}>
        <div className={styles.container}>
          <p className={styles.msg}>route/dynamic/params1/[[...params]].tsx</p>
          <div className={styles.params_container}>
            <p>Params 1 : {params[0]}</p>
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
  return <PageNotFound />

  // params1にAccessすると下記のリターンを返す
  // paramsはどれだけでも受け取れる(consoleで確認できる)
  // return (
  //   <Layout pageTitle={'NextJS Practices'} appName={'NextJS Practice'}>
  //     <div className={styles.container}>
  //       <p className={styles.msg}>route/dynamic/params1/[[...params]].tsx</p>
  //       <div className={styles.params_container}>
  //         {Array.isArray(params) &&
  //           params.map((item, idx) => (
  //             <p key={item}>
  //               Params {idx} : {item}
  //             </p>
  //           ))}
  //       </div>
  //       <div className={styles.button_container}>
  //         <button type='button' onClick={() => router.push('/')}>
  //           Home
  //         </button>
  //       </div>
  //     </div>
  //   </Layout>
  // )
}

export default Param
