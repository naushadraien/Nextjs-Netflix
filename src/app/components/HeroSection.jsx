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
    </main>
  )
}

export default HeroSection