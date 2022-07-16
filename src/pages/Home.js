import React from 'react'
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Slider from '../components/Slider';

const Home = () => {
  return (
	  <div>
		  <Announcement />
		  <Navbar />
		  <Slider />
		  <Products />
	</div>
  )
}

export default Home
