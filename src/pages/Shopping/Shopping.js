import React, { useState } from 'react'
import Categories from './Categories'
import { Card, FoodCard } from '../../components/card'


export default function Shopping() {
  const [selectedCategory, setSelectedCategory] = useState(0)

  const renderSelectedCategory = () => {
    switch (selectedCategory) {
      case 0:
        return <div>
          <FoodCard
            imageUrl="https://cdn-image.getir.com/market/product/aaa904af-b3a9-4e22-865f-8dd86ad85dba.jpg"
            price="27 TRY"
            title="Doritos"
            weight="750gr"
          />
        </div>
      case 1:
        return <div>NUTS PAGE!</div>
      case 2:
        return <div>GOFRET PAGE!</div>
      case 3:
        return <div>WATER PAGE!</div>
      case 4:
          return <div>MİNERAL WATER PAGE!</div>
    }
  }

  return (
    
    <div style={{ marginTop: 50 }} className="row">
      <div className="row">Categories</div>
      <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
        <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </div>
      <main className="col-auto col-md-9 col-xl-10 px-sm-10 px-0">
        {renderSelectedCategory()}
      </main>

    </div>
  )
}

