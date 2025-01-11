import { Link } from 'react-router-dom';
import styles from './cabecera.module.css';
import logo from './logo-alura.png';
import CabeceraLink from '../cabeceraLink/CabeceraLink';

function Cabecera() {
    return(
        <header className={styles.cabecera}>
            <Link to="/">
                <section className={styles.logoContainer}>
                    <img src={logo} alt="Logo de Alura"/> <span>Cinema</span>
                </section>
            </Link>
            <nav>
                <CabeceraLink url="/">
                    Home
                </CabeceraLink>
                <CabeceraLink url="/favoritos">
                    Favoritos
                </CabeceraLink>
            </nav>
        </header>
    )
}

export default Cabecera;