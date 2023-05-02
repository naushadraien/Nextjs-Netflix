import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";

const MovieCard = (curElem) => { //this curElem is passed from movie file page.jsx as props
    const {id, title, synopsis, backgroundImage} = curElem.jawSummary; //destructuring the props i.e curElem is titles and this curElem.jawsummary is titles.jawSummary
  return (
    <>
    <div className={styles.card}>
        <div className={styles.card_image}>
            <Image src={backgroundImage.url} alt={title} width={260} height={200} key={id} />
        </div>
        <div className={styles.card_data}>
            <h2>{title.slice(0,18)}</h2>
            <p>{`${synopsis.slice(0,66)} ...`}</p> {/* here we are slicing the synopsis to 66 characters and adding ... after 66 characters*/}
            <Link href={`/movie/${id}`}>
                <button>Read More</button>
            </Link>
        </div>
    </div>
    </>
  )
}

export default MovieCard;