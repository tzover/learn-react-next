// style
import styles from '../../styles/modules/Rendering.module.css'

// components
import ChildLayout from '../templates/ChildLayout'
import SubTitle from '../atoms/SubTitle'
import RoutingButton from '../atoms/RoutingButton'

const Rendering = () => {
  return (
    <>
      <SubTitle title={'Rendering'} />
      <ChildLayout>
        <h3>fallback (getStaticPaths)</h3>
        <div className={styles.flex_container}>
          <RoutingButton path='/rendering/fallback/false' name={'false'} />
          <RoutingButton path='/' name={'true'} />
          <RoutingButton path='/' name={'blocking'} />
        </div>
        <h3>revalidate (getStaticProps)</h3>
        <div className={styles.flex_container}>aaaa</div>
      </ChildLayout>
    </>
  )
}

export default Rendering
