import React from 'react'
// import Image from 'next/image'


import Navbar from '../components/landing-navbar'
import Hero from '../components/hero'
import How_it_Works from '../components/how-it-works'
import Features from '../components/features'
import Team from '../components/meet-the-team'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className='overflow-hidden bg-gray-900'>
      <div 
        className='bg-fixed bg-no-repeat h-screen w-screen bg-color bg-gray-900 font-Work' 
        style={{backgroundImage: `url('/images/hero-image.png')`,
        }}>
      {/* <Navbar /> */}
      < Navbar />
      <Hero />
      </div>
      <div className='mt-24'/>
      <How_it_Works />
      <Features />
      <div className='mt-44'/>
      <Team />
      <div className='mt-40'/>
      <Footer />
    </div>


  )
}
