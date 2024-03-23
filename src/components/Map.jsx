import React from 'react'

function Map() {
  return (
    <section className='bg-black'>
    <h1 className=' uppercase w-full text-center text-white font-extrabold text-2xl'>Dove puoi trovarci</h1>
      <div className='w-full min-h-[40vh]h-[40vh] grayscale mt-10'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.534749256412!2d15.058513676445818!3d41.05730231640416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133987bc80b03937%3A0x9f56cf9a9d44ba4f!2sContrada%20Toppolo%2C%2083035%20Grottaminarda%20AV!5e0!3m2!1sit!2sit!4v1711115605909!5m2!1sit!2sit"
          className='w-full h-full'
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