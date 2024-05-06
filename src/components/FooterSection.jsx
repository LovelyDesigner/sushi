import React from 'react'
import '../styles/main.css'
import { Link } from 'react-router-dom'

const FooterSection = () => {
  return (
    <div className='container'>
        <footer>
            <button id='fixed'>
                <a className='whatsapp' href='https://wa.me/+27780919302' target='_blank' rel="noopener">
                    <i className='fa-brands fa-whatsapp'/>
                </a>
            </button>
            <div className='copyright'>
                <p className='cpy'>&copy; Jack Manuel. All Rights Reserved.
                <br /> <Link to='/terms_and_conditions'>Terms and Conditions Apply</Link></p>
            </div>
            <div className='designed'>
                <p className='design'>
                    Designed by<br/> <a href='https://www.facebook.com/lovely.designer.2023' target='_blank' rel='noopener'>L<i className="fa-regular fa-heart"></i>vely Designer</a>
                </p>
            </div>
        </footer>
    </div>
  )
}

export default FooterSection