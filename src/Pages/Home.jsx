import React, { useContext } from 'react'
import { store } from '../Components/Details'
import { Link } from 'react-router-dom'
import BollyImg from '../Images/BollyImg.jpg'
import FoodImg from '../Images/FoodImg.jpg'
import techImg from '../Images/techImg.jpg'

const Home = () => {
  const [context] = useContext(store);
  // console.log(detail);
  return (
    <div>
      <div className='grid-container'>
        <div className='item1'><Link to={'/bollywood'}><img src={BollyImg} alt="No Image" className='img1'/></Link></div>
        <div className='item2'><Link to={'/food'}><img src={FoodImg} alt="No Image" className='img2'/></Link></div>
        <div className='item3'><Link to={'/technology'}><img src={techImg} alt="No Image" className='img3'/></Link></div>
      </div>
      <h2 className='heading'>The Latest</h2>
            <div className='right-h'>
              <div className='flex-h'>
          <div className='main-h'>
            {context.filter((data)=>data.category==="mix")
            .map((details, index)=>{
              return (
                <React.Fragment key={index}>
                  <div keys={index} className='box-h'>
                    <Link keys={index} to={'/'+details.category+'/'+details.title} state={details} className='box1-h'>
                      <div>
                        <img src={details.img} alt="" />
                        <h4>{details.title.substring(0,45) + '...'}</h4>
                      </div>
                  
                    {/* <h4>{details.category}</h4> */}
                    <div className='desc-h'>
                      {details.description.substring(0,150) + '...'} 
                    </div>
                    </Link>
                    
                  </div>
                  
                </React.Fragment>
              )
          })}
          </div>
    </div></div>
    <div><h2 className='heading'>Trending</h2>
          <div className='Add'><h3 className='Add'>Advertisement</h3></div>
    </div>
    </div>
  )
}

export default Home
