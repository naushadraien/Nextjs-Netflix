//this file for if the page is not found i.e 404 error then it will show this page
import styles from '@/app/styles/common.module.css'
import Link from 'next/link'

const NotFound = () => {
  return (
    <section className={styles.container}>
        <div className={styles.error_page}>
            <h1>404</h1>
            <h2>Not Found!</h2>
            <p>Couldn&apos;t find requested page</p>
            <Link href='/'>
                <button>Go to Home Page</button>
            </Link>
        </div>
    </section>
  )
}

export default NotFound