
nextjs benefits:
- auto convert into server components:
if a component runs in client's browser, component is called a client component
if a component runs in server, its called server component.

since server components are more performant, nextjs automatically convert them into server component unless you specifically told it not to.

- rendering:
client side rendering: server send html css js to client, browser executes to render the component and display the web.
server side rendeirng: server executes and render the component and display the web and transmit the fully rendered html and js code to client, so client see the web instantly.
nextjs does the second one - server side rendeirng

- routing: nextjs comes with file based routing automatically.

- backend api request in same directory where UI exists.