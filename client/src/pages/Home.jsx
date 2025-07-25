import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Header from '../components/Header.jsx'
import Bloglist from '../components/Bloglist.jsx'
import Newsletter from '../components/Newsletter.jsx'
import Footer from '../components/Footer.jsx'


const Home = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <Bloglist/>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default Home
