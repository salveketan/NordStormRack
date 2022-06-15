import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Activewear from '../Pages/Activewear'
import BagsAccessories from '../Pages/BagsAccessories'
import Beauty from '../Pages/Beauty'
import Clearence from '../Pages/Clearence'
import FlashEvents from '../Pages/FlashEvents'
import Gifts from '../Pages/Gifts'
import Home from '../Pages/Home'
import Kids from '../Pages/Kids'
import LandingPage from '../Pages/LandingPage/Main'
import Men from '../Pages/Men'
import Shoes from '../Pages/Shoes'
import Women from '../Pages/Women'
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

            </Routes>
        </div>
    )
}

export default AllRoutes
