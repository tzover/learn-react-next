import { useRouter } from 'next/router'
import styles from '../../styles/atoms/RoutingButton.module.css'

interface Props {
  path: string
  name: string
}

const RoutingButton = (props: Props) => {
  const { name, path = '/' } = props
  const router = useRouter()
  return (
    <button
      type='button'
      className={styles.btn}
      onClick={() => router.push(`${path}`)}
    >
      {name}
    </button>
  )
}

export default RoutingButton
