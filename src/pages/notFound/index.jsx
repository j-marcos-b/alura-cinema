import styles from './norFound.module.css';

const NotFound = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.error}>404</h2>
            <p className={styles.text_error}>Sorry, the page you are looking for does not exist.</p>
        </section>
    )
}

export default NotFound;