import React from 'react'
import ProductCard from '../layouts/ProductCard'

const Features = () => {

    const data = [
        {
            id: 6,
            img: "/src/assets/img/product6.jpg",
            name: "Nike Air",
            price: "198.00",
            discount: "20% off",
        },
        {
            id: 7,
            img: "/src/assets/img/product7.jpg",
            name: "Nike Air",
            price: "198.00",
            discount: "20% off",
        },
        {
            id: 8,
            img: "/src/assets/img/product8.jpg",
            name: "Nike Air",
            price: "198.00",
            discount: "20% off",
        },
       

    ]

    return (
        <div className='min-h-screen flex flex-col justify-center pt-25 mt-10'>
            {/* heading sections */}
            <h1 className='font-semibold text-4xl text-center text-ExtraDarkColor'>Exclusive Products</h1>
            {/* card sections */}
            <div className='flex flex-wrap justify-center gap-5 pt-8'>
                {data.map((item)=>(
                 <div className='md:w-2/4 lg:w-1/4'>
                    <ProductCard
                    key={item.id}
                    id={item.id}
                    img={item.img}
                    name={item.name}
                    price={item.price}
                    discount={item.discount}
                />
                 </div>
                ))}
            </div>
        </div>
    )
}

export default Features
