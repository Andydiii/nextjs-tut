 // Although the 404 not found page is pre-defined by nextjs. Sometimes we like to customize our own not found page.
 // the file name must be exactly "not-found.tsx". This is a nextjs convention

 import React from 'react'
 
 export default function NotFound() {
   return (
    <>
        <div>Page Not found</div>
        <p>Could not find requested resource</p>
    </>
   );
 }
 