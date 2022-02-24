import Head from 'next/head'
import styles from '../../styles/Header.module.css'

interface Props {
  pageTitle: string
  appName: string
}
const Header = (props: Props) => {
  const { pageTitle, appName } = props
  return (
    <>
      {/* App Header */}
      <Head>
        <title>{pageTitle}</title>
      </Head>
      {/* Header */}
      <header className={styles.header}>
        <div className='p-3'>
          <p className='text-2xl font-extrabold bg-clip-text text-green-700'>
            {appName}
          </p>
        </div>
      </header>
    </>
  )
}

export default Header
