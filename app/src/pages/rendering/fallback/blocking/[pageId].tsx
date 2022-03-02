import { useRouter } from 'next/router'

// styling
import styles from '../../../../styles/globalRouterChild.module.css'

// components
import Layout from '../../../../components/templates/Layout'

// another
import { getTaskData } from '../../../../libs/tasks'
import { TaskIF } from '../../../../models/tasks'

// interface
interface Props {
  task: TaskIF
}

const Task = (props: Props) => {
  const { task } = props
  const router = useRouter()

  if (router.isFallback) {
    return (
      <Layout pageTitle={'NextJS Practices'} appName={'NextJS Practice'}>
        <p className={styles.msg}>Loading...</p>
      </Layout>
    )
  }

  return (
    <Layout pageTitle={'NextJS Practices'} appName={'NextJS Practice'}>
      <div className={styles.container}>
        <p className={styles.msg}>
          {task.id} : {task.task}
        </p>
        <div className={styles.button_container}>
          <button type='button' onClick={() => router.back()}>
            Back
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default Task

export const getStaticPaths = async () => {
  // const response = await getAllTasksData()

  // const paths = response.map((item) => {
  //   return {
  //     params: {
  //       pageId: `${item.id}`,
  //     },
  //   }
  // })

  return {
    paths: [
      {
        params: { pageId: '1' },
      },
      {
        params: { pageId: '2' },
      },
      {
        params: { pageId: '3' },
      },
    ],
    // 上記で PageId 1-3までをbuild時にloading
    // 下記は全てbuild時にloading
    // paths,

    // fallback blockingのため 1-3以外の pageにはアクセス出来るが page生成後にルーティングされる
    fallback: 'blocking',
  }
}

type Params = {
  params: {
    pageId: string
  }
}

export const getStaticProps = async (context: Params) => {
  const { params } = context
  const response = await getTaskData(params.pageId)

  if (!response.id) {
    return {
      notFound: true,
    }
  }

  console.log(`Genetationg page for .../fallback/false/${params.pageId}`)

  return {
    props: {
      task: response,
    },
  }
}
