"use client";

import Image from 'next/image'
import { useEffect } from "react";

const MeetTheTeam = () => {
    useEffect(() => {
      const init = async () => {
        const { Animate, initTE } = await import("tw-elements");
        initTE({ Animate });
      };
      init();
    }, []);


    return(
        <div className='flex flex-col mx-28' id='meetTheTeam'>
            <div className=' font-bold text-6xl'>
                MEET THE TEAM
            </div>
            <div className="grid grid-cols-3 gap-8 mt-10">
                {/*Earl*/}
                <div className={TeamCardContaier}
                data-te-animation-init
                data-te-animation-start="onScroll"
                data-te-animation-on-scroll="repeat"
                data-te-animation-reset="true"
                data-te-animation="[tada_1s_ease-in-out]">
                    <Image src="/images/Earl.png" alt="hero-image" width={80} height={100}/>
                    <div className={TeamCardTitle}>
                        Earl John Pulido
                    </div>
                    <div className={TeamCardSubtitle}>
                        Computer Engineering
                    </div>
                    <div className={TeamCardDescription}>
                        Pamantasan ng Lungsod ng Maynila
                    </div>
                </div>

                {/*Piolo*/}
                <div className={TeamCardContaier}
                data-te-animation-init
                data-te-animation-start="onScroll"
                data-te-animation-on-scroll="repeat"
                data-te-animation-reset="true"
                data-te-animation="[tada_1s_ease-in-out]">
                <Image src="/images/Piolo.png" alt="hero-image" width={80} height={100}/>
                    <div className={TeamCardTitle}>
                        Piolo Justin Cabigao
                    </div>
                    <div className={TeamCardSubtitle}>
                        Computer Engineering
                    </div>
                    <div className={TeamCardDescription}>
                        Pamantasan ng Lungsod ng Maynila
                    </div>
                </div>

                {/*Rex*/}
                <div className={TeamCardContaier}
                data-te-animation-init
                data-te-animation-start="onScroll"
                data-te-animation-on-scroll="repeat"
                data-te-animation-reset="true"
                data-te-animation="[tada_1s_ease-in-out]">
                <Image src="/images/rex-icon.png" alt="hero-image" width={85} height={100}/>
                    <div className={TeamCardTitle}>
                        Ricardo Nono
                    </div>
                    <div className={TeamCardSubtitle}>
                        Computer Engineering
                    </div>
                    <div className={TeamCardDescription}>
                        Pamantasan ng Lungsod ng Maynila
                    </div>
                </div>
            
                {/*Sey*/}
                <div className={TeamCardContaier}
                data-te-animation-init
                data-te-animation-start="onScroll"
                data-te-animation-on-scroll="repeat"
                data-te-animation-reset="true"
                data-te-animation="[tada_1s_ease-in-out]">
                <Image src="/images/Sey.png" alt="hero-image" width={80} height={100}/>
                    <div className={TeamCardTitle}>
                        Isaiah Sebastian
                    </div>
                    <div className={TeamCardSubtitle}>
                        Computer Engineering
                    </div>
                    <div className={TeamCardDescription}>
                        Pamantasan ng Lungsod ng Maynila
                    </div>
                </div>

                {/*Martin*/}
                <div className={TeamCardContaier}
                data-te-animation-init
                data-te-animation-start="onScroll"
                data-te-animation-on-scroll="repeat"
                data-te-animation-reset="true"
                data-te-animation="[tada_1s_ease-in-out]">
                <Image src="/images/Martin.png" alt="hero-image" width={95} height={105}/>
                    <div className={TeamCardTitle}>
                        Martin Vince Castro
                    </div>
                    <div className={TeamCardSubtitle}>
                        Computer Engineering
                    </div>
                    <div className={TeamCardDescription}>
                        Pamantasan ng Lungsod ng Maynila
                    </div>
                </div>

                {/*Sy*/}
                <div className={TeamCardContaier}
                data-te-animation-init
                data-te-animation-start="onScroll"
                data-te-animation-on-scroll="repeat"
                data-te-animation-reset="true"
                data-te-animation="[tada_1s_ease-in-out]">
                <Image src="/images/Sy.png" alt="hero-image" width={80} height={100}/>
                    <div className={TeamCardTitle}>
                        Syrus Viscayno
                    </div>
                    <div className={TeamCardSubtitle}>
                        Computer Engineering
                    </div>
                    <div className={TeamCardDescription}>
                        Pamantasan ng Lungsod ng Maynila
                    </div>
                </div>
            </div>
        </div>
    )

}
export default  MeetTheTeam;
export const meetTheTeamId = 'meetTheTeam';

const TeamCardContaier = "flex flex-col h-64 w-72 bg-team-card rounded-xl items-center text-center p-4"
const TeamCardTitle = "text-2xl font-bold mb-2"
const TeamCardSubtitle = "text-base font-semibold"
const TeamCardDescription = "text-xs font-light"

