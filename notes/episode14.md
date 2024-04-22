- There are three types of testing we can do as a developer
- 1. Unit Testing
- 2. Integration Testing
- 3. End to End Testing - e2e testing

- Unit Testing :- Unit testing means that you test your react components in isolation.
  for example:- suppose your are testing only one component like header only nothing else.

- Integration Testing:- Integration testing is the testing the integration of the components. suppose we have search functionality and this functionality make using multiple components if we test this type of functionality that testing known as integration testing.

- End to end testing means testing a react application as soon as the user lands on the website to the user leaves the website and we will test all the flows. we will test different type of flows.
  End to end testing requires different type of tools. some tools like
- Cypress
- Puppeteer
- Selenium

Developer is soley responsible to test the above two testing 1. Unit Testing 2. Integration Testing.

- 1. React testing library:- There used to be a DOM testing library already.(Pahle ye DOM testing library ke name se hua karti thi) testing library is old library. It's been a long time since testing library exist.
- React testing library is built on the top of DOM testing library

- DOM testing library basically means that without any frameworks. So react testing libray is a wrapper around DOM testing library, and it adds more feature

### important note: - if you are build react project using create react app so then react testing library already exist inside it.

But in our case we build our application from scratch so we need to install this library.

- React testing library something known as Jest.
- Jest is a delightful JavaScript testing framework which is focus on simplicity.
- Jest is basically a JavaScript testing framework. and DOM testing library or React testing library uses Jest behind the scenes.
  React testing library needs Jest in our project also.
  so we need to install both library jest and react testing library.

steps

1. Install react testing library
2. Install jest library
3. if you are using jest with babel you need to install dependencies. (Install babel dependencies)
4. need to configure babel. (need to create babel.config.js) file
5. Configure Parcel Config file to disable default babel transpilation.
6. Jest Configuration to initialize the jest using this command (npx jest --init)
7. install jsdom library.
8. install @babel/preset-react - to make JSX work in test cases
9. Include @babel/preset-react inside my babel config file.
10. install @testing-library/jest-dom

Note:- Parcel automatically has Babel inside it. Parcel uses babel behind the scene. Now when we are using jest and when we are using these dependencies manually so when we do this, so these dependencies will intefare with parcels because parcel also uses babel and now we are trying to configure babel according to us. so what will happen is there will be a conflict between babel and parcel. so go to the parcel documentation and override the configuration

How to find the babel configuration for jest
step1 go to parcel documentation
step2 search jest in search bar

or
step1 go to parcel documentation
step2 go to JavaScript in left sidebar
step3 go to the babel in right sidebar
step4 Read Usage with other tools heading

Need to read all the stuff.

If I have to run test case so I would need a command for that so go to package.json file and see the command so for test
we need to run npm run test command.

if you got No tests found, existing with code 1 it means your configuration has been done successfully. because we did not create the test cases.

### jest configuration

1. Just you need to run command (npx jest --init)
2. it will ask few question
   i. Would you like to use TypeScript for configuration for your project? No
   ii. important question:- Choose the test environment that will be used for testing :- jsdom (browser-like)
   iii. Do you want Jest to add coverage reports? - yes
   iv. Which provider should be used to instrument code for coverage ? Babel
   v. Automatically clear mock calls, instances, context and result before every test? yes

### what is jsdom:- when you run test cases so there is no server running, there is no browser these test case does not run on the browser will not run google chrome. they will need a environment to run test cases jsdom behave just like a browser. jsdom give the feature like browser.

suppose we are testing header component so header component will be loaded inside the js dom.

## how to install jsdom library?

step1. go to react testing library
step2. go to setup
step3. read the stuff
step4. insall jsdom

How to write the folder name of test file
**test** inside this folder it will consider two extension .js or .ts

but you don't like that so you can choose alternative option .test.js if your file name is Header you can write like that Header.test.js or Header.spec.js or Header.spect.ts or Header.test.ts

//Assertion is mandatory for testing other test automatically passed this expection of the result

### how to install @babel/preset-react library

1. install it.
2. include in babel config
3. presets:[
   ["@babel/preset-env", {targets:{none:"current"}}],
   ["@babel/preset-react", {runtime:"automatic"}],
   ]

so @babel/preset-react helping to test file to convert jsx file into html for reading.

//this is querying
const inputBox = screen.getAllByRole("textbox") // it will return the jsx element

screen.getAllByRole() whenever there are multiple items then we will use this.

### How to create the test cases?

step1. There is test name function that take two inputs first is description of the test case and second is callback where we write the test cases.
step2. import {render} method from "@testing-library/react" this render method will take the component. which is going to be rendered.
example render(<Contact/>) I will rendered it to the JS DOM. This will be rendered to the JS DOM. I have to tried to render this component onto this JS DOM so we will test whether this component was rendered successfully or not?

firstly i will check heading is loaded in the component or not?

step3. so next method is screen that is also import from "@testing-library/react"
and
step4 const heading = screen.getByRole("heading") it used to get heading tag by this function.

step5. assertion :- expect(heading).toBeInTheDocument(); this function will be check wheather my heading is inside in my doucment or not.

if custom matchers not show after expect(). so run this command npm i -D @types/jest

#### Part 04

Suppose you have a lot of test cases so your file has increase now it become difficult to manage.
so we will create different group test cases.

suppose you have 20 test cases there are 5 test case of contact page or 5 about page and 5 others pages so on
describe function is used to create group testing
describe("contact us page test cases", ()=>{

---

---

---

---

})

we use test function just like that
test("description of the test", callbackFn)
you can use it instead of test

suppose you have multiple button and you want to specific button using getByRole() function because it will give all button so we can pass the name of name
inside it
example:- getByRole("button", {name:"Login"})

---

suppose we want to find the cart item in the header so we will use getByText("Cart - (0 items)") text should be exact if cart item is 0 it will passed but when increase the cart item value then it will be failed so what should be do for that we will use regex inside the getByText() you don't need to write exact string if you use regex if you just write cart it will match by cart according to this scenario
screen.getByText(/Cart/)

- if you want to test the event you need to use fireEvent
  const loginButton = screen.getByRole("button")
  example:- fireEvent(loginButton)

### note1

we have body component and that component have fetch function we have render the body component for the testing purpose. but it is thrown an error fetch is not defined.
so what is the reason ?
Ans:- When you test body component and we use render function that is render the component so inside testing render function is rendering component on js dom which is like browser dom but not all the superpower of browser while fetch is the superpower of browser
fetch method I am able to write fetch over here because this is inside the browser this superpower is given us by browsers it is not there in JavaScript.
so fetch does not understand by JavaScript so how to handle it.
so we will have to write the mock or fake fucntion for this fetch function

- I am defining my own dummy function just and how to get my fetch function

global.fetch = jest.fn(()=>{}); //this function will take the callback function
so basically i will mock exactly like how my fetch function works
we need to create mock function exactly jiska function ka hm mock bna rahe hai
jaise ki fetch function promise return karta hai to hme bhi promise return krana padega.

jest.fn() give the mock function and we defined the globally.

- whenever you are using a state updates so wrap your render method into an act function.
- What is act function?
- ans:- act function is basically comes from your react-dom/test-utils
  import {act} from "react-dom/test-utils
- act funtion return promise so we need to await to handle promies

- suppose if getByRole is not working you cannot figure out and you dont know how to get my input box by role how to get my input box by placeholder you don't know how to get my input box by label but at the end of the day get by testid always work

jis input box apko search krna hai usme data-testid attribute likhker uske aage koi text likh do jiske through app usko get kar pao.

<input type="text data-testid="searchInput"> data-testid hamesha aise hi likhi jayegi ye jest provide krta hain
