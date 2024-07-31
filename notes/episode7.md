## Episode 7

- 1. if no dependency array => useEffect is called on every component render.
- 2. if dependency array is empty = [] => useEffect is called on initial render(just once)
- 3. if dependency array is [btnName] => called everytime btnName is updated. and called on initial load.

- 4. Never create the hook outside the component. It will call only inside the component function body.
- 5. it used for creating local variable inside functional component.
- 6. always try to call useState of the top of component. (Good Practice)
- 7. never created or used the useState inside the condtional statement (like if else statement, for and other condition for example) it can create the inconsistency in your code.

## React Router

- BrowserRouter Browser router is a component provided by react router, a library used for managing routing in react application. The BrowserRouter component utilities html 5 history api to keep ui in sync with the url in the browser address bar. read docs

## how to create route in react?

- step1 :- first need to install the react router dom package using npm. That is inbuilt library and provide the functions to manage route.
- step 2 import the createBrowserRouter and RouteProvider from react router dom
- step 3 using createBrowserRouter create the array of object
  just like that
  const appRouter = createBrowserRouter([
  {
  path:'/',
  element:<AppLayout/>,
  },
  {
  path:'/about',
  element:<About/>
  }
  ])

if you want to show the custom page of the error so you can pass the errorElement property
const appRouter = createBrowserRouter([
{
path:'/',
element:<AppLayout/>,
errorElement:<Error/> create component for Error page
},
{
path:'/about',
element:<About/>
}
])

### How to create route children in react

if you want to make the children route in react you need to pass children property

const appRouter = createBrowserRouter([
{
path:'/',
element:<AppLayout/>,
children:[
{
path:'/',
element:<Body/>
}
{
path:'/about',
element:<About/>
},
{
path:'/contact',
element:<Contact/>
}
]
errorElement:<Error/> create component for Error page  
 },
])

- about and contact are children of AppLayout

const AppLayout = () => {
return (

<div className="app">
<Header>
{/** if path = / \*/}
<Body/>
{/** if path = /about _/}
<About/>
{/\*\* if path = /contact _/}
<Contact />
</div>
)
}

basically what i want to do i want to push my childern inside the AppLayout Component according to the route
how it possible?

- Using Outlet this is component and import from react-router-dom
- Whenever there will be change in the path so Outlet will be filled with the children according to the path.
  For example whenever i will be on slash my Body will be filled inside the outlet and if I will be on /about so Outlet will be filled by About Component.

### will you see the Outlet component inside the html element in inspect.

- No beacuse it replaced by component that path called

example

<Header/>
<Outlet/>

I called the /about

so it will be

<Header/>
<About/>

I called the /contact
so it will be

<Header>
<Contact />

## how to write comment in jsx

{/\*\* \*/}

## how to navigate to another page

- Using Link component
- Whenever you want to go to another page without reload page you can use link
- Link component import from react-router-dom libary
<Link to="/about">About</Link> if we click on the about icon it will navigate to about page.
- behind the scene link is used anchor tag if we see by inspect.
- behind the scene browser does not understand what is Link. Browser understand only anchor tag react-router-dom making anchor tag to link behind the scene and also keeping the track of it. Link wrapper over anchor tag

- There are two types of routing in web application

  - Client Side Routing
  - Server Side Routing

- Server Side Routing:- You have index.html, contact.html and about.html etc file if I click on my anchor tag /about.html it reload the whole page it send the network call to about.html and fetched the html and render on the web page.

- Client Side Routing:- It does not make the network call. Whenever I load the app very first time it load the whole component. when I go to about us page it just load the about component.

- React is single page application just component getting interchange via client side routing.

## How to create the dynamic routing and dynamic page.

const appRouter = createBrowserRouter([
{
path:'/',
element:<AppLayout/>,
children:[
{
path:'/',
element:<Body/>
}
{
path:'/about',
element:<About/>
},
{
path:'/contact',
element:<Contact/>
},
{
path:'/restaurent:restId',
element:<RestaurentMenu/>
}
]
errorElement:<Error/> create component for Error page  
 },
])

we can create the dynamic path using colon in react;

### How to get params in react

- using useParams() hook.
- first we need to import useParams hook from react-router-dom;
- useParams hook give the object you can destructure.
  example const {restId} = useParams();
