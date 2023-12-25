import React from 'react'
import img from "../assets/img/collection.png"


const Collections = () => {
    return (
        <div className='h-screen lg:h-[70vh] flex flex-col justify-between lg:flex-row items-center bg-PrimaryColor mt-0 lg:px-32 px-5 capitalize'>
            {/* img sections */}
            <div className='flex justify-center w-full lg:w-2/4 pt-6'>
                <img src={img} alt="img" />
            </div>
            {/* content sections */}
            <div className='w-full lg:w-2/4 space-y-4 pt-5 text-center lg:text-start'>
                <h1 className='text-4xl font-semibold text-ExtraDarkColor'>Best Summer Collections</h1>
                <h3 className='text-lg font-medium text-DarkColor'>sale Get up to 60% off</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, ullam harum saepe quae debitis distinctio modi soluta sapiente accusamus quibusdam vel tenetur dignissimos m magnam!</p>

                <button className='bg-ExtraDarkColor text-white px-4 py-2 font-medium active:bg-amber-800'>
                    Shop Now
                </button>
            </div>
        </div>
    )
}

export default Collections
