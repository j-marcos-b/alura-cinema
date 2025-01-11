import styles from './banner.module.css';

function Banner({img, color}) {
    return(
        <div className={styles.capa} style={{backgroundImage: `url("/banner-${img}.png")`}}>
            <div className={styles.gradient} style={{backgroundColor: `${color}`}}></div>
        </div>
    )
}

 export function Banner2({img2, color}) {
    return(
        <div className={styles.capa} style={{backgroundImage: `url("/banner-${img2}.png")`}}>
            <div className={styles.gradient} style={{backgroundColor: `${color}`}}></div>
        </div>
    )
}

export default Banner;
