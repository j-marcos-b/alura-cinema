import Banner from "../../components/banner/index";
import Titulo from "../../components/titulo";
import styles from './index.module.css'
import Card from "../../components/cards";
import { useState, useEffect } from "react";


function Inicio() {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        fetch("https://my-json-server.typicode.com/j-marcos-b/alura-cinema-api/videos")
            .then(response => response.json())
            .then(data => {
                setVideos(data)
            })
    }, [])
    return (
        <>
            <Banner img="home" color="#154580" />
            <Titulo><h1>Un lugar para guardar tus videos favoritos</h1></Titulo>
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>
        </>
    )
}

export default Inicio;