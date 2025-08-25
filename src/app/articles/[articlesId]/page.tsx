import Link from "next/link";
import React from "react";

interface props {
  params: Promise<{ articlesId: string }>;
  searchParams: Promise<{ lang?: "en" | "fr" | "es" }>;
}

// we can destructure props to get params and search params
// params is a promise that resolves to get an object containing the dynamic route
// searchParams is a promise that resolves to an object containing lang.

/** 
 if we want to use params/searchParams: 
 
  1. if its a client side component which does not support async function and await, then we cannot use params/searchParams directly, but need to use "use" hook and remove async keywrod and await keywords, use it in this way: use(params), use(searchParams)
  2. if it is a server side component, directly use it without "use" hook. but remember to add await and async
  3. page.tsx has access to params and searchParams but layout.tsx has only access to params
 in client side component we can use usePathname hook directly to get the whole path.
**/ 


function convertor(lang: "en" | "fr" | "es" | undefined) {
  switch (lang) {
    case "fr":
      return "French";
    case "en":
      return "English";
    case "es":
      return "Spanish";
    case undefined:
      return "English";
  }
}

export default async function NewsArticle({ params, searchParams }: props) {
  const articlesId = (await params).articlesId;
  console.log("articleId: " + articlesId);

  let lang = (await searchParams).lang;
  // in case lang is underfined, we have to make a default value which is "en"
  lang = !lang ? "en" : lang;
  console.log("lang: " + lang);

  return (
    <>
      <h1 className="text-4xl font-bold">News article {articlesId}</h1>
      <br />
      <p>Reading in {convertor(lang)}</p>

      <br />
      <Link href={`/articles/${articlesId}?lang=en`}>English</Link>
      <br />
      <Link href={`/articles/${articlesId}?lang=fr`}>French</Link>
      <br />
      <Link href={`/articles/${articlesId}?lang=es`}>Spanish</Link>
    </>
  );
}
