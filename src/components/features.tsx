"use client";

import Image from "next/image";
import { useEffect } from "react";

const Features = () => {
  useEffect(() => {
    const init = async () => {
      const { Animate, initTE } = await import("tw-elements");
      initTE({ Animate });
    };
    init();
  }, []);

    return(
        <div className="flex flex-col mt-48" id="features">
            <div className='font-bold text-6xl text-center'>
                FEATURES
            </div>
            <div className='flex flex-row mx-11 justify-around mt-12'>
                {/*Feature 1*/}
             
                <div className= {featureCardContainer} 
                data-te-animation-init
                data-te-animation-start="onScroll"
                data-te-animation-on-scroll="repeat"
                data-te-animation-reset="true"
                data-te-animation="[zoom-in_1s_ease-in-out]">
                    <Image src="/images/feature-1.png" alt="hero-image" width={80} height={100}/>

                    <div className= {featureCardTitle}>
                        Transforming <br/>
                        Campus Parking
                    </div>

                    <div className= {featureCardDescription}>
                        Tailored for students, teachers, and visitors for an organized and efficient experience.
                    </div>
                </div>
               

                {/*Feature 2*/}    
                <div className= {featureCardContainer}
                data-te-animation-init
                data-te-animation-start="onScroll"
                data-te-animation-on-scroll="repeat"
                data-te-animation-reset="true"
                data-te-animation="[zoom-in_1s_ease-in-out]">
                    <Image src="/images/feature-2.png" alt="hero-image" width={80} height={100}/>
                  
                    <div className= {featureCardTitle}>
                        Alleviate Traffic Woes
                    </div>

                    <div className= {featureCardDescription}>
                        Enhance campus flow, ensure ample parking for all.
                    </div>
                </div>

                {/*Feature 3*/}
                <div className= {featureCardContainer}
                data-te-animation-init
                data-te-animation-start="onScroll"
                data-te-animation-on-scroll="repeat"
                data-te-animation-reset="true"
                data-te-animation="[zoom-in_1s_ease-in-out]">
                    <Image className="" src="/images/feature-3.png" alt="hero-image" width={80} height={100}/>

                    <div className= {featureCardTitle}>
                        Fostering Inclusivity
                    </div>

                    <div className= {featureCardDescription}>
                        Ensure equitable access  for all, including individuals with disabilities, and seniors,
                    </div>
                </div>

                {/*Feature 4*/}
                <div className= {featureCardContainer}
                data-te-animation-init
                data-te-animation-start="onScroll"
                data-te-animation-on-scroll="repeat"
                data-te-animation-reset="true"
                data-te-animation="[zoom-in_1s_ease-in-out]">
                    <Image src="/images/feature-4.png" alt="hero-image" width={80} height={100}/>

                    <div className= {featureCardTitle}>
                        Prioritizing Safety
                    </div>

                    <div className= {featureCardDescription}>
                        Tailored for students, teachers, and visitors for an organized and efficient experience
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Features;
export const featuresId = 'features';

const featureCardContainer = "flex flex-col items-center justify-evenly text-center h-feature-card w-feature-card rounded-3xl bg-feature-card py-2"
const featureCardTitle = "text-feature-title font-bold w-feature-text h-16 leading-10"
const featureCardDescription = "text-xl w-feature-text"

