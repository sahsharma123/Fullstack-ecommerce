import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Collection from './pages/Collections.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Cart from './pages/Cart.jsx'
import Product from './pages/Product.jsx'
import Login from './pages/Login.jsx'
import PlaceOrder from './pages/PlaceOrder.jsx'
import Orders from './pages/Orders.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import SearchBar from './components/SearchBar.jsx'
import {ToastContainer , toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Verify from './pages/Verify.jsx'


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]]'>
      {/* /*in css px-4 means padding left and right 1rem sm:px-[5vw] means padding left and right 5% of the viewport width
*/ }
      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/collection' element={<Collection/>}/>
        <Route  path='/about' element={<About/>}/>
        <Route  path='/contact' element={<Contact/>}/>
        <Route  path='/cart' element={<Cart/>}/>
        <Route  path='/product/:productId' element={<Product/>}/>
        <Route  path='/login' element={<Login/>}/>
        <Route  path='/place-order' element={<PlaceOrder/>}/>
        <Route  path='/orders' element={<Orders/>}/>
        <Route path='/verify' element={<Verify/>}></Route>
      </Routes>

        <Footer/>

    </div>
  )
}

export default App
