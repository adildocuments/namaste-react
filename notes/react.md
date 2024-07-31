## what is props

Props is a special keyword in React that stands for properties and is used for passing data from one component to another. Data with props are passed in a unidirectional flow from parent to child.

## what is react component

React Components are like javascript functions that accept inputs and return react elements. component have their own lifecycle methods like component mounts, updates and unmount and manage their state. created by function and class

## what is react element

react element is a plain object describing the part of UI. react element can be created using jsx or react.creteElement method. reacts elements are immutable.

## what is jsx

Jsx stands for Javascript syntex extension. which is easier to create the react element. JSX is not part of the react. without jsx we can create react element using the react.createElement.
JSX return object.

## what are the main feature

1. JSX
2. component based structure
3. Virtual Dom
4. performance and simplicity
5. One way data binding

## what is react?

React is an open source javascript libarary. that is developed and managed by facebook. that is used to create the User Interface. first version of react js was release in may 2013. That is used to create the single page application.
It does not reload the actual dom. because react manage virtual dom.

## what is state?

state is used to manage the data within a component.

### what is controlled and uncontrolled component

if component does not have its own state and manage by parent is knonw as controlled component. and manage by itself is known as uncontrolled component.

virtual dom optimization heading in chat gpt

### reconciliation

Reconciliation is the process that react virtual dom changes apply on the actual dom.

### diff algorithm

it is the way to find out the chagnes between the previous virtual dom and current vitual dom.

### React fiber facility

1. React fiber provides the facility of breaking rendering into small chunks and spread in multiple frames
2. React fiber provides the facility of priotizing to the updates
3. React fiber provides the facility of pausing and resuming the rendering.
4. Fiber enables concurrent rendering.

## what is hook?

hooks are utility javascript function that allow to add the state and other features to functional component. React hooks introduced in 16.8
there are most important hooks

1. useState
2. useEffect
3. useRef
   read hooks
   https://medium.com/@AbidKazmi/all-react-hooks-in-one-short-4b0ed4b5a6e4

## what is higher order component?

Higher order component is a function that takes component as input and enhance or add some extra feature and return back that. which is known as higher order component.

## what is component composition.

The process of combining smaller and reusable component together to create large, more complex components.
