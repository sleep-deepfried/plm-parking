import Image from 'next/image';

const Hero = () => {
    const fileDownloadUrl = '/parkingmanagement_setup.exe';
    return(
        <>
            {/* Hero Container */}
            <div className='h-auto w-screen pt-44'>
                {/* Hero Text */}
                <div className="flex flex-col justify-center text-center items-center">
                    <div className="font-bold text-6xl font-sans h-36">
                    Introducing PLM Parking<br/> Management System
                    </div>

                    <div className="text-base h-15 mt-5">
                    Your gateway to hassle-free parking, completely free of charge. Effortless navigation, user-friendly <br/>  
                    app, and exceptional service, all at no cost. Elevate your parking experience with PLM – where <br/>
                    convenience meets affordability.
                    </div>

                    <button className='mt-9 bg-green-500 hover:bg-green-700 font-bold rounded-lg text-2xl h-16 w-44'>
                        <div className="flex flex-row justify-center items-center text-2xl">
                            <a href={fileDownloadUrl}>Try it now!</a>
                            <Image className='animate-bounce-left-right' src="/images/arrow.png" alt="arrow" width={32} height={32}/>
                        </div>
                        
                    </button>
                </div>


            </div>
        </>
    );
}

export default Hero;
