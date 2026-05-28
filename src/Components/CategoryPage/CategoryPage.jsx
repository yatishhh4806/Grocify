import React from 'react'
import Banner from '../Banner/Banner'
import ProductList from '../ProductList/ProductList'
import Card from '../Cards/Card'
import Products from '../Products/Products'

const CategoryPage = ({ title, bgImage, categories=[] }) => {
    let filteredItems = categories.includes('All') ? ProductList : ProductList.filter(item=>categories.includes(item.category))
    const renderProduct = filteredItems.map((product) => {
        return (
            <Card
                key={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
            />
        )
    })

    return (
        <div>
            <Banner title={title} bgImage={bgImage}></Banner>

            <div className='grid grid-cols-1 gap-9 md:grid-cols-4 py-20 max-w-350 mx-auto px-10'>
                {renderProduct}
            </div>
        </div>
    )
}

export default CategoryPage