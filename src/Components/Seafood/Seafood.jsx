import React from 'react'
import Baner from '../Banner/Banner'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgSeafood from '../../assets/seafood-banner.jpg'

const Seafood = () => {
  return (
    <div>
      <CategoryPage title='Meat & SeaFood' bgImage={BgSeafood} categories={['Seafood', 'Meat']}></CategoryPage>
    </div>
  )
}

export default Seafood
