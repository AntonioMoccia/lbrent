import Image from 'next/image'
import { HeroImage } from '../constants'
function Hero() {
    return (
        <div>
            <div className={`h-[calc(100vh-8rem)] 
                            bg-black justify-center flex flex-col items-center
                             rounded-t-3xl text-white `}>

                <Image className=' w-full max-w-screen-lg' src={HeroImage} />

                <h1 className=' text-[#B11000] font-extrabold text-2xl text text-center pt-14 max-w-screen-sm w-full leading-[-1%]'>
                    SCEGLI LA TUA AUTO,<br />
                    ALLACCIA LA CINTURA,<br />
                    E INIZIA IL TUO VIAGGIO.
                </h1>
                <p className=" text-center font-medium py-2 tracking-wide">
                    LB Rent il piacere di guidare senza pensieri.
                </p>
            </div>
        </div>
    )
}

export default Hero