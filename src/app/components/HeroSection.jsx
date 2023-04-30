import heroStyles from '@/app/styles/herosection.module.css'
import commonStyles from '@/app/styles/common.module.css'

const HeroSection = () => {
  return (
    <main className={heroStyles.main_section}>
        <div className={commonStyles.container}>
            <div className={commonStyles.grid_two_section}>
                <div className={heroStyles.hero_content}></div>
            </div>
        </div>
    </main>
  )
}

export default HeroSection