import React from "react";

// suppose we have idea to create url like http://localhost:3000/docs/featureId/conceptId/exampleId this kind of nested dynamic routing, then we can use the following method.

// if we create a folder with exact same name '[...slug]' in docs, then it matches all url that begins with docs. as the page.tsx is in docs/[...slug], Note it wont catch http://localhost:3000/docs !!!!

// this is called `catch-all dynamic segments` in nextjs, so we dont have to create a [foldername] for every dynamic segments everytime we add a dynamic segment in docs.
interface urlParams {
  params: Promise<{ slug: string[] }>;
}

export default async function Docs({ params }: urlParams) {
  const slug = (await params).slug;
  // in this case: 
  // slug[0] is the parameter for "featureId" in "http://localhost:3000/docs/featureId/conceptId"
  // slug[1] is the parameter for "conceptId" in "http://localhost:3000/docs/featureId/conceptId"

  // suppose we expect url to be like http://localhost:3000/docs/featureId/conceptId
  if (slug?.length === 2) {
    return (
      <>
        <h1>{slug}</h1>
        <h1>
          documentation about feature {slug[0]} concept {slug[1]}
        </h1>
      </>
    );
  } else if (slug?.length === 1) {
    // suppose we expect url to be like http://localhost:3000/docs/featureId
    return (
      <>
        <h1>{slug}</h1>
        <h1>documentation about feature {slug[0]}</h1>
      </>
    );
  }

  // if folder name is [[...slug]], even the page.tsx is inside docs/[[...slug]], but it still catches http://localhost:3000/docs and additional dynamic segments are optional
  return (
    <>
      <h1>{slug}</h1>
      <h1>documentation</h1>
    </>
  );
}
