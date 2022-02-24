import Link from 'next/link'
import { baseUrl } from '../../contexts/AppBasicContext'
import styles from '../../styles/modules/Routing.module.css'
import SubTitle from '../atoms/SubTitle'

import ChildLayout from '../templates/ChildLayout'

const Routing = () => {
  return (
    <>
      <SubTitle title={'Routing'} />
      <ChildLayout>
        <h3>Index Routes</h3>
        <div className={styles.flex_container}>
          <div className={styles.flex_child}>
            <p className={styles.route}>
              {baseUrl} <span>( This Page )</span>
            </p>
            <p>index.tsx</p>
          </div>
          <div className={styles.flex_child}>
            <div className={styles.route_container}>
              <p className={styles.route}>{baseUrl}route</p>
              <span>{`--->`}</span>
              <Link href={'/route'}>index.tsx</Link>
            </div>
            <div className={styles.route_container}>
              <p className={styles.route}>route/route1</p>
              <span>{`--->`}</span>
              <Link href={'/route/route1'}>route1.tsx</Link>
            </div>
            <div className={styles.route_container}>
              <p className={styles.route}>route/route2</p>
              <span>{`--->`}</span>
              <Link href={'/route/route2'}>route2.tsx</Link>
            </div>
          </div>
        </div>
        <h3>Dynamic Routes</h3>
        <div className={styles.adjust}>
          <div className={styles.flex_child}>aaaa</div>
        </div>
      </ChildLayout>
    </>
  )
}

export default Routing
