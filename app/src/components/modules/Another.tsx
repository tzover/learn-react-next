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
        <div className={styles.flex_container}>
          <ul>
            <li>page404 page500</li>
            <li>next/router</li>
            <li>next/image</li>
          </ul>
        </div>
      </ChildLayout>
    </>
  )
}

export default Another
