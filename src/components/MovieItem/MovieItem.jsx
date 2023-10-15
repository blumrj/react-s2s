import styles from './MovieItem.module.css'

function MovieItem({poster, title, imdbID}){
    const imdbLink = `https://www.imdb.com/title/${imdbID}`

    return (
        <div className={styles.wrapper}>
            <img src={poster} alt="" />
            <div className={styles.footer}>
                {title}
                <a href={imdbLink}  className={styles.imdb} target='_blank'>IMDB</a>
            </div>

        </div>
    )
}

export default MovieItem