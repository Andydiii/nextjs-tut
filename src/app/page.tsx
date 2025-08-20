import Link from "next/link";

// this file is the ui for root route http://localhost:3000/
// every page.tsx file in nextjs app is the ui file for that route. page.tsx is the name convention.
export default function Home() {
  return (
    <>
      <h1>Welcome Home!</h1>
      <Link href="/blog">Blog</Link>
      <Link href="products">Products</Link>
      
    </>
  );
}
