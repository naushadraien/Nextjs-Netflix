import Footer from './components/Footer';
import Header from './components/Header'
import './globals.css'
import { Mulish } from 'next/font/google';

const mulish = Mulish({
  weight: ['300','400','500','600','700','800','900'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'Netflix Data with Naushad Raien',
  description: 'Netflix, Data, Naushad Raien, Naushad, Raien, NaushadRaien, Naushad Raien Netflix, Naushad Raien Data, Naushad Raien Netflix Data, Naushad Raien Netflix Data',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
