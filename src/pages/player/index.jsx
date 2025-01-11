import Banner from '../../components/banner';
import styles from './player.module.css';
import Titulo from '../../components/titulo';
import { useParams } from 'react-router-dom';
import NotFound from '../notFound';
import { useEffect, useState } from 'react';

const Player = () => {
    const [video, setVideo] = useState([]);

    const parametros = useParams()
    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/j-marcos-b/alura-cinema-api/videos?id=${parametros.id}`)
        .then(response => response.json())
        .then(data => {
            setVideo(...data)
        })
    }, [parametros.id])
    console.log(video)
    if(!video) return <NotFound />

    return (
        <>
            <div className={styles.container}>
                <Banner img="player" color="#58B9AE" />
                <Titulo className={styles.titulo}>
                    <h1>Player</h1>
                </Titulo>
                <section className={styles.container} />
                <iframe
                    src={video.link} title={video.titulo}
                    allow='accelerometer'>
                </iframe>
            </div>
        </>
    )
}

export default Player;