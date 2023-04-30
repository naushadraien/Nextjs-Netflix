import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";

const MovieCard = (curElem) => { //this curElem is passed from movie file page.jsx as props
    const {id, title, synopsis, backgroundImage} = curElem.jawSummary; //destructuring the props i.e curElem is titles and this curElem.titles is titles.jawSummary
  return (
    <>
    <div className={styles.card}>
        <div className={styles.card_image}>
            <Image src={backgroundImage.url} alt={title} width={250} height={200} />
        </div>
        <div className={styles.card_data}>
            <h2>{title}</h2>
            <p>{synopsis}</p>
            <Link href={`/movie/${id}`}>
                <button>Read More</button>
            </Link>
        </div>
    </div>
    </>
  )
}

export default MovieCard;