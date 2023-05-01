import styles from '@/app/styles/common.module.css'
import Image from 'next/image';

const page = async ({params}) => { //params is basically id 
    const id = params.dynamicId; //destructuring id from params here params.'dynamicfoldername which was written in the square bracket'
    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`; //here id is dynamic and is get from the Rapid API NEXTFLIX Title Details API
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
  
    const mainData = data[0].details; //our main data is in the data[0].details when checked the endpoints of the Title Details of RAPID API NETFLIX API
    // console.log(id);
  return (
    <div className={styles.container}>
      <h2 className={styles.movie_title}>Netflix \ <span>{mainData.type}</span></h2>
      <div className={styles.card_section}>
        <div>
          <Image src={mainData.backgroundImage.url} alt={mainData.title} width={600} height={300} />
        </div>
        <div>
          <h1>{mainData.title}</h1>
          <p>{mainData.synopsis}</p>
        </div>
      </div>
    </div>
  )
}

export default page