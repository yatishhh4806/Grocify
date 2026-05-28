import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgAll from '../../assets/all-banner.jpg'

const AllProdcuts = () => {
  return (
    <div>
      <CategoryPage title='All Products' bgImage={BgAll} categories={['All']}></CategoryPage>
    </div>
  )
}

export default AllProdcuts
