import Link from "next/link";

// this file is the ui for root route http://localhost:3000/
// every page.tsx file in nextjs app is the ui file for that route. page.tsx is the name convention.
export default function Home() {
  return (
    <>
      <h1>Welcome Home!</h1>
      <Link href="/blog">Blog</Link>
      <br />
      <Link href="products">Products</Link>
      <br />
      {/* 
        breaking-news-123 is the dynamic route parameter, and lang=en is the query parameter
      */}
      <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
      <br />
      <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>
    </>
  );
}
