
function Hero() {
    return (
        <div  className={`h-[calc(100vh-5rem)] flex flex-col items-center bg-black bg-[url('/assets/hero-image.png')] bg-contain bg-center bg-no-repeat w-full rounded-t-3xl text-white `}>
            <h1 className=' text-[#B11000] font-extrabold text-2xl text text-center pt-14 max-w-screen-sm w-full leading-[-1%]'>
                SCEGLI LA TUA AUTO,<br/>
                ALLACCIA LA CINTURA,<br/>
                E INIZIA IL TUO VIAGGIO.
            </h1>
            <p className=" text-center font-medium py-2 tracking-wide">
                LB Rent il piacere di guidare senza pensieri.
            </p>
        </div>
    )
}

export default Hero