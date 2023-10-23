import React from 'react'
import Header from '../../components/Header'
import Carousel from '../../components/Carousel'
import VistaSelector from '../../components/VistaSelector'
import SearchBar from '../../components/SearchBar/index.'
import Checkboxs from '../../components/Checkboxs'
import Cards from '../../components/Cards'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <>
      <Header/>
      <Carousel/>
      <VistaSelector/>
      <SearchBar/>
      <Checkboxs/>
      <Cards/>
      <Footer/>
    </>
  )
}

export default Home
