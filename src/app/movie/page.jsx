import MovieCard from "../components/movieCard";
import styles from "@/app/styles/common.module.css";

const Movie = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }); //this is for loading the page for 2 seconds and then showing the data

  const url = process.env.RAPID_URL;
  // console.log("RAPID_URL:", url);
  const options = {
    method: "GET",
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_KEY,
      'X-RapidAPI-Host': process.env.RAPID_HOST,
    },
  };

  const res = await fetch(url, options);
  // console.log(res);
  const data = await res.json();
  // console.log(data);

  const mainData = data.titles; //our main data is in titles array

  return (
    <section className={styles.movieSection}>
      <div className={styles.container}>
        <h1>Series & Movies Page:</h1>
        <div className={styles.card_section}>
        {mainData.map((curElem) => {//here current element is data.titles array
          return <MovieCard key={curElem.id} {...curElem} />; //whole data is passing as props to MovieCard component using spread operator
        })}
        </div>
      </div>
    </section>
  );
};

export default Movie;
