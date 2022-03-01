import { useRouter } from 'next/router'

// styles
import styles from '../../../../styles/globalRouterChild.module.css'

// components
import Layout from '../../../../components/templates/Layout'
import { getAllTasksData } from '../../../../libs/tasks'
import { TaskIF } from '../../../../models/tasks'

// interface
interface Props {
  tasks: TaskIF[]
}

const index = (props: Props) => {
  const { tasks } = props
  console.log(tasks)
  const router = useRouter()
  return (
    <Layout pageTitle={'NextJS Practices'} appName={'NextJS Practice'}>
      <div className={styles.container}>
        <p className={styles.msg}>Fallback False version</p>
        <div className={styles.button_container}>
          <button type='button' onClick={() => router.push('/')}>
            Home
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default index

export async function getStaticProps() {
  const response = await getAllTasksData()

  return {
    props: {
      tasks: response,
    },
  }
}
