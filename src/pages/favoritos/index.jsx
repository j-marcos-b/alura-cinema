import { Banner2 } from '../../components/banner';
import styles from './favoritos.module.css';
import Titulo from '../../components/titulo';
import Cards from '../../components/cards';
import { useFavoritosContext } from '../../context/favoritosContext';

const Favoritos = () => {

    const { favorito } = useFavoritosContext();

    return (
        <>
            <div className={styles.container}>
                <Banner2 img2="favoritos" color="#154580" className= {styles.banner} />
                <Titulo>
                    <h1>Mis Favoritos</h1>
                </Titulo>
                <section className={styles.cards}>
                    {favorito.map(fav => {
                        return <Cards {...fav} key={fav.id} />
                    })}
                </section>
            </div>
        </>
    )
}

export default Favoritos;