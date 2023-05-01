import styles from '@/app/styles/common.module.css'

//this file is for showing the loading animation when the page is loading and added css for this loading className from loading.io/css

const loading = () => {
  return (
    <section className={styles.loading_section}>
        <div className={styles.loading}></div>
    </section>
  )
}

export default loading;