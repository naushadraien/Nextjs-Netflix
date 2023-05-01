import heroStyles from '@/app/styles/herosection.module.css'
import commonStyles from '@/app/styles/common.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { Mulish } from 'next/font/google';

const mulish = Mulish({
    weight: ['300','400','500','600','700','800','900'],
    subsets: ['latin'],
    display: 'swap'
  })

const HeroSection = ({title, imageUrl}) => { //title and imageUrl props passed from about section
  return (
    <main className={heroStyles.main_section}>
        <div className={commonStyles.container}>
            <div className={commonStyles.grid_two_section}>
                <div className={heroStyles.hero_content}>
                    <h1>{title}</h1>
                <p> From award-winning dramas to blockbuster action movies, we&apos;ve got you covered. Browse
                            our
                            selection of the latest and greatest movies, and find your new favorite today.
                        </p>
                        <Link href="/movie">
                            <button className={mulish.className}>
                                Explore Movies
                            </button>
                        </Link>
                </div>
                <div className={heroStyles.hero_image}>
                    <Image src={imageUrl} alt='hero image' width={500} height={500} />
                </div>
            </div>
        </div>
        {/* this shapedivider is div and css for this div is taken from the shapedivider.app website */}
       <div className={heroStyles['custom-shape-divider-bottom-1681647578']}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        className={heroStyles["shape-fill"]}></path> {/* newWay to add the className for the shape-fill i.e it has - between shape and fill so it can be written within the square bracket as written in this line of className */}  
                </svg>
            </div>
    </main>
  )
}

export default HeroSection