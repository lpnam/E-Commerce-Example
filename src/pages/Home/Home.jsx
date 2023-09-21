import React from 'react';
import './Home.scss';
import Slider from '../../component/Slider/Slider'
import FeaturedProducts from '../../component/FeaturedProducts/FeaturedProducts';
import Categories from '../../component/Categories/Categories';
import Contact from '../../component/Contact/Contact';

const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts type="featured"/>
      <Categories/>
      <FeaturedProducts type="trending"/>
      <Contact/>
    </div>
  )
}

export default Home