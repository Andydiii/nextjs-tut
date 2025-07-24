the speacial layout for the route at productId or beyond it.

name convention is layout.tsx

note that the root layout is still there. the speacial layout is present when the route is at productId or beyond productId. e.g. `http://localhost:3000/products/3/reviews` or `http://localhost:3000/products/3`

so the render order is like: root layout -> special layout -> UI for page content