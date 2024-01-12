export default function Footer(){
    return(
        <div className="bg-zinc-800 h-footer bg-fixed"
            style={{backgroundImage: `url('/images/footer.png')`,
            }}>
            <div className="flex flex-row mx-36 pt-36">
                <div className="font-bold text-6xl h-80 ">
                PLM <br/>
                PARKING <br/>
                MANAGEMENT <br/>
                SYSTEM <br/>
            </div>

            <div className="text-2xl mt-56">
            PLM Parking Management System&rsquo;s aim is 
            to transform parking management by 
            offering cutting-edge technology and user-
            friendly solutions. We hope to create a 
            future in which parking is no longer a 
            burden, but rather a well-organized and 
            user-friendly experience.
            </div>

            </div>
        </div>
    );
}