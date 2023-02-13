import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Bollywood from '../Pages/Bollywood'
import Technology from '../Pages/Technology'
import Hollywood from '../Pages/Hollywood'
import Fitness from '../Pages/Fitness'
import Food from '../Pages/Food'
import Unique from './Unique'

const BlogRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/:category/:name' element={<Unique/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/bollywood' element={<Bollywood/>}/>
            <Route path='/technology' element={<Technology/>}/>
            <Route path='/hollywood' element={<Hollywood/>}/>
            <Route path='/fitness' element={<Fitness/>}/>
            <Route path='/food' element={<Food/>}/>
        </Routes>
    </div>
  )
}

export default BlogRoutes