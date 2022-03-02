import { useRouter } from 'next/router'
import Image from 'next/image'

// styling
import styles from '../../../../styles/globalRouterChild.module.css'

// components
import Layout from '../../../../components/templates/Layout'
import RoutingButton from '../../../../components/atoms/RoutingButton'

// another
import { getAllTasksData } from '../../../../libs/tasks'
import { TaskIF } from '../../../../models/tasks'

// interface
interface Props {
  tasks: TaskIF[]
}

const FallbackSample = (props: Props) => {
  const { tasks } = props
  const router = useRouter()
  return (
    <Layout pageTitle={'NextJS Practices'} appName={'NextJS Practice'}>
      <div className={styles.container}>
        <p className={styles.msg}>Fallback blocking version</p>
        {tasks.map((item) => (
          <div key={item.id} className={styles.route_container}>
            <p>TaskNo.{item.id}</p>
            <div className={styles.route_container_child}>
              <Image src={'/next.svg'} width={20} height={20} />
            </div>
            <RoutingButton path={`${router.asPath}/${item.id}`} name={'Go'} />
          </div>
        ))}
        <div className={styles.button_container}>
          <button type='button' onClick={() => router.push('/')}>
            Home
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default FallbackSample

export const getStaticProps = async () => {
  const response = await getAllTasksData()

  return {
    props: {
      tasks: response.slice(0, 3),
    },
  }
}
