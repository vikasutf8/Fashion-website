import { Provider } from "react-redux"
import Collections from "./components/Collections"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import Reviews from "./components/Reviews"
import Shop from "./components/Shop"
import { store } from "./redux/store"
import { useState } from "react"
import Cart from "./components/Cart"
import { Toaster } from "react-hot-toast"


function App() {

  const [showCart,setShowCart] =useState(false)

  return (
    <>
      <div>
        <Provider store={store}>
          <Navbar  setShowCart={setShowCart}/>
          {showCart && <Cart setShowCart={setShowCart}/>}
          <div id="home">
            <Home />
          </div>
          <div id="shop">
            <Shop />
          </div>
          <div id="collections">
            <Collections />
          </div>
          <div id="features">
            <Features />
          </div>
          <div id="products">
            <Products />
          </div>
          <div id="reviews">
            <Reviews />
          </div>
          <div id="footer">
            <Footer />
          </div>
          <div>
            <Toaster position="bottom-center" reverseOrder={false}/>
          </div>
        </Provider>
      </div>

    </>
  )
}

export default App
