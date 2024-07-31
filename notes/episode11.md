## What is higher order component?

- Higher order component is a function that takes the component as a input and returns the component. that is higher order component.

- Higher order component takes the component as a input and enhance it component and adds some extra feature and returns back that.

- It takes existing component and just enhance it and returns back known as higher order component.

- when we write higher order components these higher order components are pure function what do you mean by pure function pure function means that it will not change any of types things in passed component just.

- Higher order components are used to enhance the components may UI or passing some extra props. but it will not modify the passed component.

## why do use it?

### scenario

hamare pass multiple accordian hain or jab ek accordian pr click karte hain to hm chahte hain baki accordian collapse ho jaye bs ek hi expand rahe abhi jo state maintain ho rhi sabki self hi ho rhi h yani category se control hain.

### example recommended category component controlling item list and new added category component is not aware what is happening inside the recommended category. Newly added component does not know recommended category is expand or collapse.

I want state to be lifted up I don't want to give power to expand and collapse to itemcategory. but I want to give the power to the item category parent. Restaurent menu is the parent of item cateogry.

## basically i am lifting up my state.

- restaurent category does not have its self state but i will give the control to the parent of category.

the jargon is the restaurent category is controlled component and restaurent menu is uncontrolled. restaurent menu is controlled restaurent category component.

if component does not have its own state and manage by parent is knonw as controlled component. and manage by itself is known as uncontrolled component.

### Ques:- Can we modify the state variable of parent from children? (Parent RestaurentMenu) and (Children RestaurentCategory).

- It is not possible directly but indirectly you do that. so we can pass the state function as a props inside callback funciton and if you want to pass any arguement you can pass.

- sometimes we have to lift the state up if we have to control our children

### what is lifting state up?

- Sometimes, you want the state of two components to always change together. To do it, remove state from both of them, move it to their closest common parent, and then pass it down to them via props. This is known as lifting state up, and it’s one of the most common things you will do writing React code.

### What is props drilling?

- passing data between the components and passing data one component to another component it the very big challenge.
- react has one way data flow.
- the data passed parent to children and childeren to their children and so on.
- data direction top to bottom.

- suppose you need to pass data parent to children and children pass to their childern and that children pass to their children it may be 7 to 8 level or more. so this is known as props drilling.

- the important thing is this is not good way to pass data. so what is alternative of this.
- we should avoid props drilling.
- suppose if we have to pass to one or two level its ok.
- so we can use react context instead of props drilling.
- we use context which is kind of global place where is your data is kept and anybody can access that is known as react context.

- make data layer more powerful using context.
- where should be use context. suppose you want to display the logged in user name and you need to show the logged in user in the card and can be needed on other page. so basically there are some pieces of data we want to access anywhere in the application.

- another example is related to theme you need to every where to change normal to dark and vice versa.

- so context is kind of global. I would not like to keep context inside the component folder in a different place. we can create context under utils folder.

### How to create context in react?

- create folder UserContext under utils folder.
- import createContext from 'react' library.
- assign createContext to given folder name
- const UserContext = createContext({}) centeral global object
- you create the functionality inside the UserContext function
- now you want to use on Header page. you need to import useContext hook from 'react'
- and import also UserContext file.
- const data = useContext(UserContext)

### where should be use useContext hook.

- only the data which you are using like at multiple places or you feel it can be use on multiple places. that is where you will use your context

- In the class you can not use hook so how to access create context in the class you need to import the created file UserContext.js and use <UserContext.Consumer>{(data)=>{console.log(data)}}</UserContext.Consumer>

### Use of context in the real life.

- the default user value in the context what if we want to change the value of this user context. what if we wanted to not use the default value but suppose if i logged as a user and I have some authentication code written in my app and I logged in and how can modify this context

- suppose i have authencation data I logged in using authencation api and get some data of user. I want to show the user name that user is logged in so question is how can we change the context data.
- we create the state [userData, setUserData] = useState();
- fetch the api using useEffect hook.
- and update the userData state variable using setUserData function.

How do I pass this context the new information in my app to pass this new information in my app I will use context provider

firstly we import the UserContext file and we will use Provider like that <UserContext.Provider> some....data </UserContext.Provider> wrap my whole app inside this user context provider and i can pass in whatever value i have to pass in provider
<UserContext.Provider value={{loggedInUser:userData}}> I am providing the new value to it.and i am passing, i am providing it to whole app. Whatever you wrap inside provider that means anywhere inside my app we have the context provider. now our component will not be using default value.

Example1
UserContext is the file name

whatever we pass value it will show the value in wrapped component. every will the value will be adil ali where we use context
<UserContext.Provider value={{loggnedInUser:'adil ali'}}>

<Header>
<About>/or<Home/>/or<Contact/>
</UserContext.Provider>

example2
whatever we pass value it will show the value adil ali inside only header and inside about or home or contact here show the default value becuase these are outside of the provier.
<UserContext.Provider value={{loggnedInUser:'adil ali'}}>

<Header>
</UserContext.Provider>
<About>/or<Home/>/or<Contact/>

example3
whatever we pass value it will show the value adli ali inside only header and inside home, about and contact show the vlaue elon musk. and inside company show the defalut value.
<UserContext.Provider value={{loggnedInUser:'adil ali'}}>

<Header>
<UserContext.Provider value={{loggedInUser:'Elon Musk'}}>
<About>/or<Home/>/or<Contact/>
</UserContext.Provider>
</UserContext.Provider>
<Company/>

I can create multiple context.
