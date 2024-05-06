import React from 'react'
import jimage1 from '../assets/sushi.jpg'

const HeroSection = () => {
  return (
    <section className='container'>
      <div className='jwrapper'>
        <div className='head_container'>
          <div className='conwrapper'>
            <h className="heading">
                Experience Sushi Delivered: Crafted with Passion, 
                Delivered to Your Door
            </h>
            <div className='smhead'>
              Elevate your next gathering or indulge in a solo treat with authentic, 
              made-to-order sushi delivered fresh to your doorstep
            </div>
          </div>
          <div className='img-con'>
             <div className='imges'>
               <img className='images' src={jimage1} alt='Sushi Platter'/>
             </div>
          </div>
        </div>
      <div className='chevron'>
        <button className='chevron-d'>
          <a className='chevron-down' href="#about">
            <i className='fas fa-chevron-down' />
          </a>
        </button>
      </div>
      </div>
    </section>
  )
}

export default HeroSection