- Class component :- React class components are simple classes that extend React.Component . They define the UI, manage state, and handle events within your application.

- we can also pass the props and recieve with help of constructor function in the class.
- Class Component extends from React.Component
- We need to pass props to the super method to send the parent.
- Why do we need super inside the constructor function.
- Super() function is to call the constructor of the parent class. It is used when we need to access a few variables in the parent class. It returns an object which represents the parent class. 

- To pass the props to the component is same as function component.
- to use propos we need to this keyword this.props.name;
- we cannot use hooks inside the class component.
- we create the state variable inside the constructor function  this.state = {count:0}

- Never update state variable directly this.state.count = this.state.count+1;

- Suppose this.state variable have multiple count variable
 like this.state = {
    count:0,
    count1:0,
    count2:0,
    count3:0,
 }
 this.setState({
    count:this.state.count+1,
    count1:this.state.count1+1,
 })
 it will update only count and count1 variable. setState function does not touch other variable.

## state variable inside the class and function
- Function Component
    - const [count, setCount] = useState(0)
    - const [count1, setCount2] = useState(1)
    - To update the state
    - setCount(count+1);
    - setCount(count1+1)

- Class Component
    - this.state = {
        count:0,
        count1:1
    }
    - To update the state
    this.setState({
        count:this.state.count+1,
        count1:this.state.count1+1
    })


- How to write class component

import React from 'react';
About extends React.Component{}

or 

import {Component} from 'react';
About extends Component{}

Suppose you have a about component that have class component it start rendering so it found the UserClass component it move to the UserClass component and load this component firstly run constructor function then render method.

- How to work class component
suppose you have about and user class component where about is the parent of user component
firstly load the about component it will load the constructor function then render function inside the render function it will find the user component it will move to the user class and load the first constructor and render method user have also componentDidMount function then this function load after that comback and load the componentDidMount function of parent

- When componentDidMount called?
- once the component is mounted then componentDidMount is called. when this function called component mounted successfully.


### why react is so fast?
### class based component react life cycle

- React has two phases 1. render phase 2. commit phase
- When the component is mounting first of all constructor is called then the render() is called constructor and render in the render phase
Then react updates the dom and then componentDidMount is called.
- React updated the dom in the single batch;

Note: Mounting cycle happens for every child and every parent and every component in the react

- Parent Constructor
- Parent Render

- First Child Constructor
- First Child Render

- Second Child Constructor
- Second Child Render

<Dom updated - in single batch>
- First Child Component did mount
- Second Child Component did mount
- Parent Child Component did mount



- Component did mount:- you can make the async function to componnent did mount and call the api inside.

the process to render data inside the class
//firstly constructor call with dummy data and then render method and redner html after that component did mount call inside this we call the api and set the state here mounting process finished. 

once mounting process finished setState was called render method called once again and render html data with api data and then it will called component did update
-------------Mounting Cycle----------
constructor(Dummy) 
render(Dummy)
    <Html Dummy>
component did mount
    <API Calls>
    <this.setState>
---------------Update Cycle------------
    render(API Data)
    <Html (new api data)>
component did update

--------- Unmounting Cycle-----------------



unmounting means removing the component from the Dom
when call component will mount when goes to another page