import Image from 'next/image';

export default function LandingNavbar() {
    return (
        <>
            {/*Navbar Container*/}
            <div className='bg-gray-900 h-24 w-screen flex flex-row justify-between items-center'>

                {/*Logo*/}
                <div className='ml-36'>
                    <Image src="/images/logo.png" alt="logo" width={300} height={21}/>  
                </div>

                {/*Links*/}
                <div className='container flex justify-between text-white text-xl w-96'>
                    <a href='#' className='no-underline hover:underline underline-offset-8'>How it Works</a>
                    <a href='#' className='no-underline hover:underline underline-offset-8'>Features</a>
                    <a href='#' className='no-underline hover:underline underline-offset-8'>About Us</a>
                </div>

                {/*Login Button*/}
               <div className='mr-36'>
                    <button className='bg-green-500 hover:bg-green-700 text-white font-bold rounded-3xl w-40 h-14 text-2xl'>
                        Login
                    </button>
                </div>
            </div>
        </>
    );
}