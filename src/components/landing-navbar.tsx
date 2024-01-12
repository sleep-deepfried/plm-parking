"use client";

import Image from 'next/image';

import {featuresId} from '../components/features';
import {howItWorksId} from '../components/how-it-works';
import {meetTheTeamId} from  '../components/meet-the-team';


const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const scrollToFeatures = () => {
  const featuresElement = document.getElementById(featuresId);
  if (featuresElement) {
    // Do something with the element, e.g., scroll to it
    featuresElement.scrollIntoView({ behavior: 'smooth' });
  }
};

const scrollToHowItWorks = () => {
  const howItWorksElement = document.getElementById(howItWorksId);
  if (howItWorksElement) {
    // Do something with the element, e.g., scroll to it
    howItWorksElement.scrollIntoView({ behavior: 'smooth' });
  }
}

const scrollTomeetTheTeam = () => {
  const meetTheTeamElement = document.getElementById(meetTheTeamId);
  if (meetTheTeamElement) {
    // Do something with the element, e.g., scroll to it
    meetTheTeamElement.scrollIntoView({ behavior: 'smooth' });
  }
}
const fileDownloadUrl = '/parkingmanagement_setup.exe';

  export default function LandingNavbar(){
    return(
    <>
      {/* Navbar Container */}
      <div className='h-24 w-screen flex flex-row justify-between items-center fixed'>

        {/* Logo */}
        <button className='ml-36'
        onClick={scrollToTop}>
          <Image src="/images/logo.png" alt="logo" width={300} height={21} />
        </button>

        {/* Links */}
        <div className='container flex justify-between text-white text-xl w-96'>

          <button onClick={scrollToHowItWorks}
          className='no-underline hover:underline underline-offset-8'>
            How it Works
          </button>

          <button onClick={scrollToFeatures} 
          className='no-underline hover:underline underline-offset-8'>
            Features
          </button>

          <button onClick={scrollTomeetTheTeam}
          className='no-underline hover:underline underline-offset-8'>
            About Us
          </button>
        </div>

        {/* Download Button */}
        <div className='mr-36'>
          <button
            // onClick={openPopup}
            className='bg-green-500 hover:bg-green-700 text-white font-bold rounded-3xl w-40 h-14 text-2xl'>
            <a href={fileDownloadUrl} >Download</a>
          </button>
        </div>
      </div>
    </>
    );
}

