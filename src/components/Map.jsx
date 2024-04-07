import React from 'react'

function Map() {
  return (
    <section className='bg-black lg:pt-14'>
      <h1 className=' uppercase w-full text-center text-white font-extrabold text-2xl'>Dove puoi trovarci</h1>
      <div className='w-full  flex justify-center min-h-[40vh] h-[40vh] lg:h-[60vh] grayscale mt-10'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d612.8826257359021!2d15.055148805930557!3d41.05987480312497!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133987bc8acd7a0f%3A0xe5af992988b69e4a!2sAutonoleggio%20LB%20Rent!5e1!3m2!1sit!2sit!4v1712485120514!5m2!1sit!2sit"
          className='w-full xl:w-[80%] h-full rounded-t'
          style={{
            margin: 0
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </section>
  )
}

export default Map