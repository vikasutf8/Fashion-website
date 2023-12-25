import React from 'react'
import ReviewCard from '../layouts/ReviewCard'

const Reviews = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center pt-25 px-5 mt-0 lg:pt-32'>
      <h1 className='font-semibold text-4xl text-center text-ExtraDarkColor lg:mt-14 mt-24'>Feedback Corner</h1>
      {/* review sections */}
      <div className='flex flex-col items-center xl:flex-row gap-5 justify-center py-4 my-8'>
        <ReviewCard name="Dr. Arya Srivatav"/>
        <ReviewCard name="Mr. Nishu abyeb"/>
        <ReviewCard name="Prof. Robert jeo"/>

      </div>
    </div>
  )
}

export default Reviews
