import { ReactNode, memo } from 'react'
import styles from '../../styles/templates/ChildLayout.module.css'

interface Props {
  children: ReactNode
}
const ChildLayout = memo((props: Props) => {
  const { children } = props
  return <div className={styles.layout}>{children}</div>
})

export default ChildLayout
