import React from 'react'
import { useAppSelector } from '../redux/hooks'
import {RxCross1} from 'react-icons/rx'
import CartProduct from '../layouts/CartProduct'

const Cart = ({setShowCart}) => {
    const data =useAppSelector((state) =>state.cartReducer)
    const getTotal =()=>{
        let total =0;
        data.forEach((item)=>(total =total+item.price*item.quantity))
        return total
    }

  return (
    <div className='bg-[#0000007d] w-full min-h-screen fixed left-0 top-0 z-10 overflow-y-scroll'>
      <div className='max-w-[400px] w-full min-h-screen bg-white absolute right-0 top-0 p-6'>
        <RxCross1 className='absolute right-0 top-0 m-6 text-[24px] cursor-pointer'
        onClick={()=> setShowCart(false)}/>
        <h3 className='pt-6 text-lg font-medium text-DarkColor uppercase'> Your Cart</h3>
        <div className='mt-6 space-y-2'>
            {data?.map((item)=>(
              <CartProduct
              key={item.id}
              id={item.id}
              img={item.img}
              title={item.name}
              price={item.price}
              quantity={item.quantity}
              />
            ))}
        </div>
        <div className='flex justify-between items-center font-medium text-xl py-4'>
          <p>Total:</p>
          <p>${getTotal()}.00</p>
        </div>
        <button className='bg-ExtraDarkColor text-white px-4 py-2 font-medium w-full active:bg-amber-800 active:text-black capitalize'>
          Add More product
        </button>
        <button className='border-DarkColor text-black  border-2 px-4 py-2 my-2 font-medium w-full active:bg-amber-800 active:text-white capitalize'>
          Go To Cart
        </button>
      </div>
    </div>
  )
}

export default Cart

