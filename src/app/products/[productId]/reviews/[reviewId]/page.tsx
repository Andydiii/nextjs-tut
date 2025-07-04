import React from "react";

interface ProductReviewInterface {
  params: Promise<{ productId: string; reviewId: string }>;
}

export default async function ProductReview({ params }: ProductReviewInterface) {
    const productId = (await params).productId;
    const reviewId = (await params).reviewId;
    return <h1>Review {reviewId} for Product {productId} </h1>;
}
