## <div id="root">Not Rendered</div> if react not able to rendering something this will be so. so this is good practice to write like that. if you got not rendered message you can understand there is something wrong with your app

# every file or component should not be exceed 100 lines of code. this is the good practice.

### Virtual DOM:-

- Virtual dom is a representation of actual dom. (It render object)

### Diff Algorithm:

- it find out the difference between previous virtaul dom and update virtual dom.

### reconciliation

- whenever something changes in ui is known as reconciliation.
- react fiber:- it is the new way to find the diff between update dom and previous dom.

- we pass or not pass props but got empty props object if you call like that <Card  />
  const Card = (props)=>{
  console.log(props)
  }
  output {}

- you can write the component in small letter but you have to import in capital letter
  like
  const card = () =>{

}
export default card;

but you have to import
Card from './path' (Capital)
but you want to in small letter

you can like javascript function
card from './path';

{card()}
most important here neither you get the empty props nor in the object it will only like a normal variable you have to pass make a object

{card({name:adil})} like that

--save-dev is same -D

**add** something known as dunder method that is use for testing purpose

---

Global descripton

- Client-side (Browser): When React code is executed in a web browser, the global object is not typically directly used. Instead, the global scope in the browser environment is provided by the window object. In a browser's JavaScript environment, window is the global object, and you would access global variables and functions through it. Directly accessing global in the browser's console will indeed result in an error because it's not defined in the browser's JavaScript runtime.

- Server-side (Node.js): When React code is executed on the server with Node.js (for server-side rendering or other server-side processes), the global object is available. Node.js provides the global object as a way to access global variables and functions within its runtime environment. In this context, global is defined, and you can access it without error.

- So, to clarify, while the global object is indeed available in Node.js, it's not directly available in the browser's JavaScript environment. In a browser environment, you typically use window as the global object. If you're running React code in a Node.js environment, such as for server-side rendering or testing with Jest, then global is indeed available.

---

to continue run test automatically

"watch-test":"jest --watch" write in package.json file.
