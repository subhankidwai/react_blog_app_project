import React from 'react'
import { useLocation } from 'react-router-dom'

const Unique = () => {
    let Location = useLocation()

    const data = Location.state
    
  return (

    <div className='unique'>
        <h1 className='unique-heading'>{data.title}</h1>
        <img src={data.img} alt='Not Found' className='unique-image'/>
        <p className='unique-description'>{data.description}</p>
    </div>
  )
}

export default Unique