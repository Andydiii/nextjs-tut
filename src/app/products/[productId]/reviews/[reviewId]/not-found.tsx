"use client"; // only client side can use hooks

import { usePathname } from 'next/navigation';
// Although the 404 not found page is pre-defined by nextjs. Sometimes we like to customize our own not found page.
 // the file name must be exactly "not-found.tsx". This is a nextjs convention
 // this not-found.tsx in [reviewid] folder will be will shown instead of the notfound.tsx in app folder when we access url like http://localhost:3000/products/1/reviews/1002

 import React from 'react'
 
 export default function NotFound() {
  // we use usePathname hook to get the url parameter. Note this needs the component to be clinet component, since nextjs uses server side rendering by default.
  // params prop to get url parameter can only be used in page component
  const path = usePathname();
  const productId = path.split("/")[2];
  const reviewId = path.split("/")[4];
  
   return (
    <>
        <p>Review {reviewId} not found for product {productId}</p>
    </>
   );
 }
 