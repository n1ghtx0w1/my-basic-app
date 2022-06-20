import Link from "next/link"
import Layout from "../components/Layout"
import styles from '../styles/404.module.css'

export default function PageNotFound() {
  return (
    <Layout title='Page Not Found'>
        <div className={styles.error}>
            <h1>404</h1>
            <h4>Page Not Found</h4>
            <Link href='/'>Go Back Home</Link>
        </div>
    </Layout>
  )
}