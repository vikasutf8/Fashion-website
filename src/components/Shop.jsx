import React from 'react'
import ProductCard from '../layouts/ProductCard'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Shop = () => {

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
        {
            id: 4,
            img: "/src/assets/img/product4.jpg",
            name: "Nike Air",
            price: "198.00",
            discount: "20% off",
        },
        {
            id: 5,
            img: "/src/assets/img/product5.jpg",
            name: "Nike Air",
            price: "198.00",
            discount: "20% off",
        },
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
        {
            id: 9,
            img: "/src/assets/img/product9.jpg",
            name: "Nike Air",
            price: "198.00",
            discount: "20% off",
        },
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
        {
            id: 13,
            img: "/src/assets/img/product13.jpg",
            name: "Nike Air",
            price: "198.00",
            discount: "20% off",
        },
        {
            id: 14,
            img: "/src/assets/img/product14.jpg",
            name: "Nike Air",
            price: "198.00",
            discount: "20% off",
        },


    ]

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive:[
            {
                breakpoint:1023,
                setting:{
                    slidesToScroll:3,
                    slidesToShow:3,
                    infinite:true,
                    dots:true,
                },
            },
            {
                breakpoint:768,
                setting:{
                    slidesToScroll:2,
                    slidesToShow:2,
                    initialSlide:2
                },
            },
            {
                breakpoint:480,
                setting:{
                    slidesToScroll:1,
                    slidesToShow:1,
                    initialSlide:2
                },
            },
        ],
        arrows:false,
      };

    return (
        <div className='min-h-screen flex flex-col justify-center'>
            {/* heading section */}
            <div>
                <h1 className='font-semibold text-4xl text-center text-ExtraDarkColor'>Best Sellers</h1>
            </div>
            {/* carousel section */}
            <div className='mt-8'>
                <Slider {...settings}>
                {data.map((item) => (
                    <ProductCard
                        key={item.id}
                        id={item.id}
                        img={item.img}
                        name={item.name}
                        price={item.price}
                        discount={item.discount}
                    />
                ))}
                </Slider>
            </div>
        </div>
    )
}

export default Shop
