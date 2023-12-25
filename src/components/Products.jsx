import React from 'react'
import ProductCard from '../layouts/ProductCard'

const Products = () => {
    const data = [
        {
            id: 10,
            img: "/src/assets/img/product10.jpg",
            name: "Nike Air",
            price: "198.00",
            discount: "20% off",
        },
        {
            id: 11,
            img: "/src/assets/img/product11.jpg",
            name: "Nike Air",
            price: "198.00",
            discount: "20% off",
        },
        {
            id: 12,
            img: "/src/assets/img/product12.jpg",
            name: "Nike Air",
            price: "198.00",
            discount: "20% off",
        },
       

    ]

  return (
    <div className='min-h-screen flex flex-col justify-center pt-25 px-5 mt-0 lg:pt-16'>
            {/* heading sections */}
            <h1 className='font-semibold text-4xl text-center text-ExtraDarkColor'>New Arrivals</h1>
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

export default Products
