import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Activewear from '../Pages/Activewear/Activewear'
import BagsAccessories from '../Pages/BagAccessories/BagsAccessories'
import Beauty from '../Pages/Beauty/Beauty'
import Cart from '../Pages/Cart'
import Clearence from '../Pages/Clearence/Clearence'
import FlashEvents from '../Pages/FlashEvents/FlashEvents'
import Gifts from '../Pages/Gifts/Gifts'
import Home from '../Pages/Home/Home'
import Kids from '../Pages/Kids/Kids'
import LandingPage from '../Pages/LandingPage/Main'
import Men from '../Pages/mens/Men'
import ProductDetails from '../Pages/ProductDetails'
import Shoes from '../Pages/Shoes/Shoes'
import Singin from '../Pages/Singin'
import Women from '../Pages/Womens/Women'
import NavButton from './NavButton'
import NavRouters from './NavRouters'


const AllRoutes = () => {
    return (
        <div>
            <NavButton />

            {/* <NavRouters /> */}
            <Routes >
                <Route path='/' element={<LandingPage />}></Route>
                <Route path='/Clearence' element={<Clearence />}></Route>
                <Route path='/activewears' element={<Activewear />}></Route>
                <Route path='/bagsaccessories' element={<BagsAccessories />}></Route>
                <Route path='/beauty' element={<Beauty />}></Route>
                <Route path='/flashevents' element={<FlashEvents />}></Route>
                <Route path='/gifts' element={<Gifts />}></Route>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/kids' element={<Kids />}></Route>
                <Route path='/mens' element={<Men />}></Route>
                <Route path='/shoes' element={<Shoes />}></Route>
                <Route path='/womens' element={<Women />}></Route>
                <Route path='/mens/:id' element={<ProductDetails />}></Route>

                <Route path='/cart' element={<Cart />}></Route>
                <Route path='/singin' element={<Singin />}></Route>
              

            </Routes>
        </div>
    )
}

export default AllRoutes
