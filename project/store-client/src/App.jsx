import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Products from './pages/Products'
import Home from './pages/home'
import Contact from './pages/contact'

const App = () => {
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
        </>
            

    )
}
export default App