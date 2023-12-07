import React from 'react'
import hero from './one.mp4';

const Herovideo = () => {
  return (
    <div className="mt-8">
      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white mt-8">
    <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
      <video
        className="min-w-full min-h-full absolute object-cover"
        src={hero}
        type="video/mp4"
        autoPlay
        muted
        loop
      ></video>
    </div>
    <div className="video-content space-y-2 z-10">
      <h1 className="font-bold text-6xl">Unleash Your Inner Warrior</h1>
      <h3 className="font-light text-3xl">Where Pixels Become Legends</h3>
    </div>
  </section>

      
    </div>
  )
}

export default Herovideo
