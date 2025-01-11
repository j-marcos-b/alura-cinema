import styles from './pie.module.css';

const Pie = ({texto}) => {
    return (
        <div className={styles.container}>
            <p className={styles.texto}>{texto}</p>
        </div>
    )
}

export default Pie;