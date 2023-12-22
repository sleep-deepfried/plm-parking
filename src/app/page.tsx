import Image from 'next/image'

import Navbar from '../components/landing-navbar'
import Hero from '../components/hero'
import Footer from '../components/footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='h-0.5 w-screen bg-gray-800'></div>
      <Hero />
      <Footer />
    </>


  )
}
