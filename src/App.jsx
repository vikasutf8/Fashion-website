import Collections from "./components/Collections"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import Reviews from "./components/Reviews"
import Shop from "./components/Shop"


function App() {
  

  return (
    <>
     <div>
      <Navbar/>
      <div id="home">
        <Home/>
      </div>
      <div id="shop">
        <Shop/>
      </div>
      <div id="collections">
        <Collections/>
      </div>
      <div id="features">
        <Features/>
      </div>
      <div id="products">
        <Products/>
      </div>
      <div id="reviews">
        <Reviews/>
      </div>
      <div id="footer">
        <Footer/>
      </div>
     </div>
      
    </>
  )
}

export default App
