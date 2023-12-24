import React from 'react'
import imges from "../assets/img/hero.png"

const Home = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:flex-row items-center lg:justify-between lg:px-32 px-5 pt-24 lg:pt-10 bg-PrimaryColor'>
        {/* contect sections */}
        <div className='capitalize space-y-4'>
        <h1 className='text-5xl font-semibold leading-tight text-ExtraDarkColor w-full lg:w-3/4'>Discovering and Defining Your own fashions!</h1>
        <p className='w-full lg:w-3/4 text-DarkColor font-medium'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam voluptatum dolor voluptatibus,
        </p>
        <button className='bg-ExtraDarkColor text-white px-4 py-2 font-medium active:bg-amber-800'>
            shop now
        </button>
        </div>

        {/* img sections */}
        <div className='bg-DarkColor p-5  mt-10 rounded-tr-[290px] rounded-tl-3xl rounded-br-3xl'>
        <img src={imges} alt="hero.png" className='-ml-5 -mb-5' width={600}/>
        </div>
    </div>
  )
}

export default Home
