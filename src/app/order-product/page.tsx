// since we used useRooter, we must use client 
"use client"

import React from "react";

/*
	useRouter Use Case:
	1. can only be used in client components
	2. any navigation triggered by user interaction
	e.g. button click handlers - after form submission 
*/
import { useRouter } from "next/navigation";

export default function OrderProduct() {
	const router = useRouter();

	function clickHandler() {
		console.log("Placing Your Order");


		// *** important: use useRouter hook to navigate programmatically
		// leading slash "/" makes the path as absolute path
		// router.push("/products");

		// without a leading slash, its seen as a relative path.
		// router.push("da");

		// replace the current last entry in the url with the new entry 
		router.replace("products");

		// replace the whole url with the absolute path
		// router.replace("/products");
	}

	return (
    <>
      <h1>Order Product</h1>
			<button className="revert-button" onClick={clickHandler}>Place Order</button>
    </>
  );
}
