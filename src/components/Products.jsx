import React from 'react'
import ProductCard from '../layouts/ProductCard'

const Products = () => {
    const data = [
        {
            id: 0,
            img: "/src/assets/img/product1.jpg",
            name: "Nike Air",
            price: "198.00",
            discount: "20% off",
        },
        {
            id: 1,
            img: "/src/assets/img/product2.jpg",
            name: "Sportswear Futura",
            price: "205.00",
            discount: "40% off",
        },
        {
            id: 3,
            img: "/src/assets/img/product3.jpg",
            name: "t-shirt combo pack",
            price: "298.00",
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
