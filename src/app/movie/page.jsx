import Link from "next/link";
import MovieCard from "../components/movieCard";
import styles from "@/app/styles/common.module.css";

const Movie = async ({ searchParams }) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }); //this is for loading the page for 2 seconds and then showing the data



  const totalData = 177; //total data is length of titles array  and we know the total data is 177 to us
// console.log("Total Data:", totalData);
const dataPerPage = 8; //data per page is 10

const totalPage = Math.ceil(totalData / dataPerPage); //total page is total data divided by data per page i.e 177/10 = 17.7 and we are using math.ceil to round off the value to 18



  let currentPage = 1; //current page is 1
  if (Number(searchParams.page) > 1) {
    currentPage = Number(searchParams.page); //if page is greater than 1 then current page is page number
  }

  //In pagination, offset refers to the number of items that are skipped before the first item is returned. For example, if you have a total of 100 items and you want to display 10 items per page, then the offset for the first page would be 0. The offset for the second page would be 10, and so on.
  let offset = (currentPage - 1) * dataPerPage; //offset is current page - 1 * data per page i.e 1-1 * 10 = 0

  const url =
  `https://netflix54.p.rapidapi.com/search/?query=stranger&offset=${offset}&limit_titles=${dataPerPage}&limit_suggestions=20&lang=en`;
// console.log("RAPID_URL:", url);
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.RAPID_KEY,
    "X-RapidAPI-Host": process.env.RAPID_HOST,
  },
};

const res = await fetch(url, options);
// console.log(res);
const data = await res.json();
// console.log('Data:',data);

const mainData = data.titles; //our main data is in titles array



let pageNumbers = []; //page numbers is empty array

for (let i = currentPage - 3; i <= currentPage +3; i++) {//i is current page - 3 and i is less than or equal to current page + 3 and i++
  if(i<1) continue; //if i is less than 1 then continue
  if(i>totalPage) break; //if i is greater than total page then break

  pageNumbers.push(i); //pushing i to page numbers array

};

console.log("Page Numbers:", pageNumbers);



  return (
    <section className={styles.movieSection}>
      <div className={styles.container}>
        <h1>Series & Movies Page:</h1>
        <div className={styles.card_section}>
          {mainData.map((curElem) => {
            //here current element is data.titles array
            return <MovieCard key={curElem.id} {...curElem} />; //whole data is passing as props to MovieCard component using spread operator
          })}
        </div>
      </div>
      <div className={styles.container} style={{display: 'flex', gap:'2rem', justifyContent:'center'}}>

          {
            currentPage - 1>=1 && <Link href={`/movie?page=${currentPage - 1}`}>{`<<`}</Link>
          }

          {
            pageNumbers.map((page)=>{
              return <Link key={page} href={`/movie?page=${page}`} className={page === currentPage ? styles.activeLink : ''}>{page}</Link>
            })
          }

{
            currentPage + 1<= totalPage && <Link href={`/movie?page=${currentPage + 1}`}>{`>>`}</Link>
          }
      </div>
    </section>
  );
};

export default Movie;
