**Routing Metadata:**
- Metadata API in NEXT.js is a powerful feature that let us define metadata for each page.
- Metadata ensures our content looks great when its shared or indexed by search engines.
- Two ways to handle metadata in layout.tsx or page.tsx files:
    1. export a static metadata object (exmaple is in about page)
    2. export a dynamic generateMetadata function (example is in [productId])

**Configuring metadata**
- both layout.tsx and page.tsx can export metadata. Layout.tsx's metadata applies to all its pages, but page.tsx's metadata applies to that specific page.
- metadata follows a top-down order, starting from root level
- when there are multiple metedata along the route, then the deeper metadata takes priority. e.g. we have a metadata in layout of app root, and a medadata in layout of about, then these two medadata will be merged but the common part will use deeper one from about. 

**how to use it with clinet side**
nextjs does not allow us to have `use client` and metadata together, so we have to create another tsx file to put the real component in there and wrap it in current page.tsx together with the medadata. refer to counter page for example.

**title**
- can be defined either with a string or an object.
  - with object, we will have three options for the title
    - default: if child route does not specify the title, then this will be used
    - template: "%s | Andy", %s woule be replaced with the title defined in child route. 
    - absolute: use it when you dont wanna metadata from parent level. check blog metadata