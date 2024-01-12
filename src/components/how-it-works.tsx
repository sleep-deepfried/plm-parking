import Image from 'next/image';

const HowItWorks = () => {
    return(
        <div id='howItWorks' className='mx-28 pt-20'>
            <div className='flex flex-row justify-between items-center'>
                <div>
                    <Image src="/images/how-it-works.png" alt="hero-image" width={525} height={1000}/>
                </div>
                <div className='flex flex-col justify-between text-end h-64'>
                    <div className='text-5xl font-bold'>
                    EXPERIENCE SEAMLESS AND
                    EFFICIENT PARKING
                    </div>
                    <div className='text-2xl'>
                    utilizing cutting-edge technology to ensure hassle-free <br/>
                    vehicle entry, secure transactions, and real-time space <br/>
                    availability updates, enhancing your parking experience <br/>
                    from entry to exit
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HowItWorks; 
export const howItWorksId = 'howItWorks';