import Link from "next/link";
import React from "react";

export default function ProductList() {
  const productId = 100;
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Product list</h1>

      <h2>
        <Link href="/products/1">Product 1</Link>
      </h2>

      <h2>
        <Link href="/products/2">Product 2</Link>
      </h2>

      {/* replace: it overrides the current visiting history, and next hit back will be back to home page 
        with it, when we click Product 3 and we redirect to product 3 details page, hit back, 
        it wont go back to last visited page but go back to home page directly*/}
      <h2>
        <Link href="/products/2" replace>
          Product 3
        </Link>
      </h2>

      <h2>
        <Link href={`/products/${productId}`}>Product {productId}</Link>
      </h2>
    </>
  );
}
