import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { store } from '../Components/Details'

const Hollywood = () => {
  const [context] = useContext(store);

  return (
    <div className='section'>
      <div className='left'><div><h2 className='heading'>Hollywood</h2>
    <div className='main'>
      {context.filter((data)=>data.category==="Hollywood")
      .map((details, index)=>{
        return (
          <React.Fragment key={index}>
            <div keys={index} className='box'>
              <Link keys={index} to={'/'+details.category+'/'+details.title} state={details} className='box1'>
                <div>
                  <img src={details.img} alt="" />
                  <h3>{details.title}</h3>
                </div>
              
              {/* <h4>{details.category}</h4> */}
              <div className='desc'>
                {details.description.substring(0,200) + '...'}
              </div>
              </Link>
            </div>
          </React.Fragment>
        )
    })}
    </div>
    </div></div>
      <div className='right'>    <div><h2 className='heading'>Trending News</h2>
    <div className='main'>
      {context.filter((data)=>data.category==="mix")
      .map((details, index)=>{
        return (
          <React.Fragment key={index}>
            <div keys={index} className='box'>
              <Link keys={index} to={'/'+details.category+'/'+details.title} state={details} className='box1'>
                <div>
                  <img src={details.img} alt="" />
                  <h3>{details.title}</h3>
                </div>
              
              {/* <h4>{details.category}</h4> */}
              <div className='desc'>
                {details.description.substring(0,200) + '...'} 
              </div>
              </Link>
            </div>
          </React.Fragment>
        )
    })}
    </div>
    </div></div>
    </div>
  )
}

export default Hollywood