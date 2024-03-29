import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from './Header'
import Footer from './Footer'
import Showcase from './Showcase'
import styles from '../styles/Layout.module.css'

export default function Layout({title, keywords, description, children}) {
  const router = useRouter()
  return (
    <div>
        <Head>
         <title>{title}</title>
         <meta name="description" content={description} />
         <meta name="keywords" content={keywords} />
         <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      {router.pathname === '/' && <Showcase />}

      <div className={styles.container}>
      {children}
      </div>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
    title: 'Basic App | by Robert',
    description: 'Keeping busy',
    keywords: 'robert, head, information, technology, wgu, bcsia, student, developer',
}