import React from 'react';
import i1 from './1.jpeg';
import i2 from './2.jpeg';
import i3 from './3.jpeg';
import i4 from './4.jpeg';
import i5 from './5.jpeg';
import i6 from './6.jpeg';

const DescriptionPage = () => {
    console.log('Description rendered');
  return (
    <div className='mt-10'>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">About Us</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">
Welcome to Brigade Rush, where we eat, sleep, and game! 🎮 We're not your average gaming site; we're the spartan men club for joystick junkies and keyboard warriors alike. Dive into a world where pixels meet passion, and your only mission is to have a blast. Pro or noob, everyone's welcome! Expect epic reviews, killer strategies, and a community that's tighter than your favorite boss fight. It's not just gaming; it's a lifestyle. Grab your snacks, level up, and let the good times roll. Welcome to the squad! 🚀 #GameOn #LevelUpWithUs</p>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="w-full h-full" src={i1} alt="A group of People" />
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Our Story</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">Once upon a time in a land of code and caffeine, our fearless developers embarked on a quest to create the ultimate gaming haven. Armed with keyboards and a questionable amount of energy drinks, they battled bugs and conquered sleepless nights. Legendary lines of code were forged, and our website was born—a pixelated paradise for gamers. Join us on this epic coding odyssey, where syntax errors are the dragons, and victory is a flawless deployment. Level up with our story; we promise, it's better than respawn delays! 🚀🎮</p>
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8">
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src={i5} alt="Alexa featured Img" />
                            <img className="md:hidden block" src={i2} alt="Alexa featured Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Mia Winters</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src={i3} alt="Olivia featured Img" />
                            <img className="md:hidden block" src={i5} alt="Olivia featured Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Cap. Ghost</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src={i4} alt="Liam featued Img" />
                            <img className="md:hidden block" src="https://i.ibb.co/C5MMBcs/Rectangle-120.png" alt="Liam featued Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Rose Winters</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src={i6} alt="Elijah featured img" />
                            <img className="md:hidden block" src="https://i.ibb.co/ThZBWxH/Rectangle-121.png" alt="Elijah featured img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Elijah</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default DescriptionPage;