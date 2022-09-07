import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { GlobalStyles } from '../components/globalStyles/global.styles'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Login from '../pages/login/Login'
import PrivateRouter from './PrivateRouter'
import Detail from '../pages/detail/Detail'
import Navbar from "../components/nav/Navbar"

const AppRouter = () => {
  return (
    <BrowserRouter>
    <GlobalStyles/>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>

        <Route path="about" element={<PrivateRouter/>}>
            <Route path="" element={<About/>}/>
        </Route>
        <Route path="detail" element={<PrivateRouter/>}>
            <Route path="" element={<Detail/> }/>
        </Route>

    </Routes>
    </BrowserRouter>

  )
}

export default AppRouter




