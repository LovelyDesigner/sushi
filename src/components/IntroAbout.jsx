import React from 'react'
import '../styles/main.css'
import Jack from '../assets/jack3.jpg'
import Uramaki from '../assets/uramaki.jpg'
import SushiSpice from '../assets/bg2.jpg'
import SushiOne from '../assets/sushi.jpg'
import delivery from '../assets/deli.jpg'

const IntroAbout = () => {
  return (
    <section id='about' className='container'>
        <div className='aboutsection'>
            <div className='head_container'>
                <div className='wrapper'>
                    <div className='smhead'>
                        Welcome to the world of sushi, delivered your way! I'm <strong>Jack Manuel</strong>, 
                        a passionate sushi chef with years of experience in 
                        creating exquisite sushi experiences. <br/><br/>
                        Whether you're craving classic nigiri and sashimi, 
                        adventurous specialty rolls, or vegetarian options, 
                        I handcraft every piece with the freshest ingredients 
                        and meticulous attention to detail.
                    </div>
                </div>
                <div className='wrapper'>
                    <img className='jack' src={Jack}/>
                </div>
            </div>
        </div>
        <div className='apparts'>
            <div className='container'>
                <h2 className='subhead'>
                    Here's what sets my sushi apart
                </h2>
                <div className='grid_container'>
                    <div className='grids'>
                       <h3 className='smhead'>Premium Ingredients:</h3>
                       <div className='divi'/>
                       <img className='apima' src={Uramaki} alt='Sushi Spice'/>
                       <div className='text'>
                            Sourcing the finest fish, rice, and other authentic 
                            staples for an unparalleled taste.
                       </div>
                    </div>
                    <div className='grids'>
                       <h3 className='smhead'>Meticulous Preparation:</h3>
                       <div className='divi'/>
                       <img className='apima' src={SushiSpice} alt='Sushi Spice'/>
                       <div className='text'>
                            Every piece is crafted with care and precision, 
                            ensuring a delightful presentation and taste.
                       </div>
                    </div>
                    <div className='grids'>
                       <h3 className='smhead'>Customization:</h3>
                       <div className='divi'/>
                       <img className='apima' src={SushiOne} alt='Sushi Spice'/>
                       <div className='text'>
                            Build your own sushi experience or choose from a curated selection of platters.
                       </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='deli'>
            <div className='head_container'>
                <div className='wrapper'>
                    <h3 className='subhead'>Convenience Delivered:</h3>
                    <div className='divi'/>
                    <div className='smhead'>
                        Order by call or whatsapp, and enjoy restaurant-quality 
                        sushi delivered directly to your comfort zone.
                    </div>
                    <div className='callToAction'>
                        <a className="ctaBtn" href='tel:+27780919302'>
                            Call now <i className='fas fa-phone-flip'/>
                        </a>
                        <a className="ctaBtn-wha" href='tel:+27780919302'>
                            whatsapp <i className='fa-brands fa-whatsapp'/>
                        </a>
                    </div>
                </div>
                <div className='wrapper'>
                   <img className='jack' src={delivery} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default IntroAbout