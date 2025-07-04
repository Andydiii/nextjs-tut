import React from 'react'

// [productId] is a dynamic file based routing, so it covers products/1 products/2 products/3 ... 
// every page in app router receives a route parameter through prop 'params'
// params is a promise that results to a object containing dynamic segments as key-value pair, the dynamic segment is productId in this case.
export default async function ProductDetails( {params}: { params : Promise<{productId: string}>;} ) {
  const productId = (await params).productId;
  return (
    // in a real app, we may want to fetch product details from an api based on product ID and render the product details instead of the hard code "ProductDetails"
    <h1>Details of the product {productId}</h1>
  )
}

