import Veg from '../components/Veg'
import Popular from '../components/Popular'
import Search from './Search';
import React from 'react'

function Home() {
  return (
    <div> 
         <Search />
        <Veg />
        <Popular />
    </div>
  )
}

export default Home