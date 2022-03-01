// style
import styles from '../../styles/modules/Another.module.css'

// components
import SubTitle from '../atoms/SubTitle'
import ChildLayout from '../templates/ChildLayout'

const Another = () => {
  return (
    <>
      <SubTitle title={'Another'} />
      <ChildLayout>
        <h3>page404 page500</h3>
        <div className={styles.flex_container}>aaaaa</div>
        <h3>next/router</h3>
        <div className={styles.flex_container}>aaaaa</div>
        <h3>next/image</h3>
        <div className={styles.flex_container}>aaaaa</div>
      </ChildLayout>
    </>
  )
}

export default Another
