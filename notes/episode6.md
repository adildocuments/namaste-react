## episode 6

### approach 1
- as soon as our app load one thing what we can do we just make the api call to fetch the data.
- and then wait for data to come and render the ui.
- if this call take 500ms so what will happend so our page will wait 500ms and after 500ms it will render the UI.
- You must have seen when you open the web page you suddenly don't see anything and as soon as api give the response it quickly show the a lot of stuff on the screen.


### approach 2
- When the web page loads we render the ui and then make the call to fetch data and then re render the ui with the new data.
- jab ham web page load karte hain to hm ui ko render kr dete hain jo bhi data ho or skelaton ho uske bad api call karte hain or jese hi response aata to hm new data ke sath ui phir se re render kr dete hain jisse hamara page blank show nh hota hain.

- In react we always use the second approach.

### useEffect
- this is hook it takes two arguement 1. callback function 2 dependency array

- Question:-
- hook always written inside the component function.
- When will this useEffect callback function be called? 
- Ans: - this callback function will be called after your component render.

- Example : useEffect hook is written inside the body component when the body component load it will render the component. and  as soon as the render cycle finished it will call the callback function which is passed in useEffect.
- agr useEffect hook body component ke andr likha h to sabse phle body component load hoga or ui component render kr dega uske bad jaise hi render cycle khtam hoga to ye callback function ko call karega jo useEffect ke ander likha hain. so is tarah se useEffect work karta hain 


- means useEffect jis component ke andr likha hota  hain phle wo component render hota hai jab render cycle khtm ho jati uske bad useEffect ke ander likha callback function call hota hai to useEffect is tarah se kam krta hain. 

using the useEffect hook we achieve the second approach.

- fetch function given by the browser not the javascript. 

## can we call the swiggy api in our local application?
- let see
- if we try to fetch the data using swiggy api it return the cors policy error?

## So What is cors policy error?
-- calling swiggy.com from localhost has been blocked due to cors policy.

## Who is blocking us?
-- our browser block us to call api from one origin to different origin.
-- our browser that's chrome is not allowing us to call swiggy's apis from localhost from one origin to another origin if the origins mismatch the browser blocks the api call that is cors policy .

## how to bypass this cors error?
-- now we can do just add the cors chrome extension. that allow to bypass the cors policy.  

-- in other browser we can find their extension.

## What is shimmar ui
- Shimmar ui is you want to show something to the user very quickly as soon as page load. It increase the user experince. This is a fake skelaton that is you can show your customer to create good experience.
- this is the standard practice and if your building ui project then definatily you should use shimmer ui.

## what is conditional rendering?
- this is fancy name: 
- Rendering basis on the condition is known as condtional rendering.


## why do we use useState hook and why do we need state variable?
-  i want to build login logout button. if transform login to logout and vice versa.
- we have given normal js variable like let btnName = 'login'
and use in <button onClick={()=>{ btnName= "logout" }}>{btnName}</button>
- it will only update the variable value but ui does not render.

- note:- if you want to make your component dynamic or if you want to something change in your component we use local state variable so here useState comes in the picture.
- suppose you use useState variable like const [btnName, setBtnName] = useState("Login");
so you cannot direct update variable value like btnName = "Logout"; 
useState give two variable first one is variable that store the value and second one is funciton that is used to update the value of variable 
so if you want to update the variable value you have to pass the value in the given function like that setBtnName("Logout") 

if we use like that btnName = "Login" so there is no way to track whether this btnName got updated or not in react.
if we update the btnName value onClick so react no anything  but 
whenever state varibale change using state variable function react will re render this component you can say refresh this component all be updated value will be there.

## if you have a header component and you change only one button value so question is it will re render header component or just re render only that button?
 Ans:- It will re render or refresh whole header component. react keep the track of btnName variable .

 process:- as soon as we clicked on login or logout button as soon as onClick event is called so passed callback function invoked and setBtnName called so react will keeping the track  of btnName variable so react will update btnName variable and then call this header component means re render. so when component rerender so useState give the updated value to the btnName varibale when it will rerender.

 ## What do you mean by rerendering component?
 - rerendering means call the component again.


 ## Important note we use const [btnName , setBtnName] = useState so here we use const but const not allow to update the value of the variable but why with useState it is allowing.
 - basically react update the btnName value and then calling the component once again so btnName variable is new variable not old one because complete component re render again.



--- ---------------
- behind the scene as soon as you call setBtnName function it will update btnName value and then render header component once again it will find the diff between the older version and new verion and it will see in that diff only login or logout  button it is getting updated.

### Note:- Whenever state variable update, react triggers a reconciliation cycle(re-renders the component)

### why react is so fast?
- virtual dom does not making it fast. react fiber (the new reconcilition algorithm) which finds out the differance between two virual dom and updatdes the dom only what portion is required for updating that's why react is fast.


### we have created the search functionality 