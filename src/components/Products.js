import React from 'react'
import products from '../products'

export default function Products(props) {
  let category = props.match.params.category
  let items = products.filter(product => product.category === category)
  return (
    <div>
      <h1>{category}</h1>
      {items.map(item => {
        return (
          <div key={item.id}>
            <p>name: {item.name}</p>
            <p>price: {item.price}</p>
            <img src={item.imageUrl} alt={item.name} height={200}/>
          </div>
        )
      })}
    </div>
  )
}