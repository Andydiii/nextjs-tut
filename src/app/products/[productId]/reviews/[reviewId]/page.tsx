import { notFound } from "next/navigation";
import React from "react";

interface ProductReviewInterface {
  params: Promise<{ productId: string; reviewId: string }>;
}

export default async function ProductReview({ params }: ProductReviewInterface) {
    const productId = (await params).productId;
    const reviewId = (await params).reviewId;
    if (parseInt(reviewId) > 1000) {
      notFound(); // this redirect to the most specific not found page.
    }
    return <h1>Review {reviewId} for Product {productId} </h1>;
}
