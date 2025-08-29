/* eslint-disable @typescript-eslint/no-unused-vars */
import { notFound, redirect } from "next/navigation";
import React from "react";

interface ProductReviewInterface {
  params: Promise<{ productId: string; reviewId: string }>;
}

export default async function ProductReview({ params }: ProductReviewInterface) {
    const productId = (await params).productId;
    const reviewId = (await params).reviewId;
    if (parseInt(reviewId) > 1000) {
      // this redirect to the most specific not found page.
      // notFound(); 
      
      // programmatical navigation: we can redirect the page to produsts list again directly
      // can only be used in a server component
      /*
        Use Case:
          redirect is triggered before page render. so use it when I dont want user see current page content for some reasons. e.g. user unauthenticated and redirect to login.
      */
      redirect("/products")
    }
    return <h1>Review {reviewId} for Product {productId} </h1>;
}
