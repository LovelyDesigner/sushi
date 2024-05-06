import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ErrorPage from '../pages/ErrorPage'
import AboutPage from '../pages/AboutPage'
import GalleryPage from '../pages/GalleryPage'
import MenuPage from '../pages/MenuPage'

const MenuBar = createBrowserRouter([
  {
    path : "/",
    element : <HomePage/>,
    errorElement : <ErrorPage/>
  },
  {
    path : "/about",
    element : <AboutPage/>
  },
  {
    path : "/gallery",
    element : <GalleryPage/>
  },
  {
    path : "/menu",
    element : <MenuPage/>
  }
  ,
  {
    path : "/terms_and_conditions",
    element : <MenuPage/>
  }
])

export default MenuBar