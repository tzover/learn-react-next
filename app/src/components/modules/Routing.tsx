import Image from 'next/image'
import Link from 'next/link'
// style
import styles from '../../styles/modules/Routing.module.css'
// components
import ChildLayout from '../templates/ChildLayout'
import SubTitle from '../atoms/SubTitle'
import RoutingButton from '../atoms/RoutingButton'
// contexts
import { baseUrl } from '../../contexts/AppBasicContext'

const Routing = () => {
  return (
    <>
      <SubTitle title={'Routing'} />
      <ChildLayout>
        {/* index */}
        <h3>Index Routes</h3>
        <div className={styles.flex_container}>
          {/* / */}
          <div className={styles.flex_child}>
            <p className={styles.route}>
              {baseUrl} <span>( This Page )</span>
            </p>
            <div className={styles.route_container}>
              <div>
                <Image src={'/next.svg'} width={20} height={20} />
              </div>
              <RoutingButton path='/' name={'index.tsx'} />
            </div>
          </div>
          {/* /route */}
          <div className={styles.flex_child}>
            <p className={styles.route}>{baseUrl}route</p>
            <div className={styles.route_container}>
              <div>
                <Image src={'/next.svg'} width={20} height={20} />
              </div>
              <RoutingButton path='/route' name={'route.tsx'} />
            </div>

            <p className={styles.route}>{baseUrl}route/route1</p>
            <div className={styles.route_container}>
              <div>
                <Image src={'/next.svg'} width={20} height={20} />
              </div>
              <RoutingButton path='/route/route1' name={'route/route1.tsx'} />
            </div>

            <p className={styles.route}>{baseUrl}route/route2</p>
            <div className={styles.route_container}>
              <div>
                <Image src={'/next.svg'} width={20} height={20} />
              </div>
              <RoutingButton path='/route/route2' name={'route/route2.tsx'} />
            </div>

            <hr />

            <p className={styles.route}>{baseUrl}/route2</p>
            <div className={styles.route_container}>
              <div>
                <Image src={'/next.svg'} width={20} height={20} />
              </div>
              <Link href={'/route2'}>
                <RoutingButton path={'/route2'} name={'route2/index.tsx'} />
              </Link>
            </div>
          </div>
        </div>
        {/* Dynamic */}
        <h3>Dynamic Routes</h3>
        <div className={styles.adjust}>
          <div className={styles.flex_child}>aaaa</div>
        </div>
      </ChildLayout>
    </>
  )
}

export default Routing
