#### Redux
- 1. Redux works on the data layer. 
- 2. Redux is used to handling data and managing store. Redux is an open-source JavaScript library for managing and centralizing application state. It most commonly used with libraries such as React or Angular for building user interface.
- 3. Redux offers easy debugging. 

### part 1
1. Redux is not mandatory
2. If you are building small or mid level applcation so no need to use redux when in the application heavily data use then redux should be use. (A lot of component and data is being transfered) use only when it is required.
3. Redux and React are different libraries.
4. Redux is not just only library that manage the state. There are a lot of libraries to manage state.
 i. zustand:- it is very popular library.

### part - 2
Redux team provide two types libraries.
1. React Redux:- it is kind of bridge between react and redux.
2. Redux Toolkit:- redux toolkit is the standard way to write the redux logic.

### Why do we use redux toolkit.
- There are three common concerns about redux.
1. Configuring a Redux store is too complicated.
2. I have to add a lot of packages to get Redux to do anything useful.
3. Redux requires too much boilerplate code. 

note: Boilerplate code means :- the programmer must write a lot of code to do minimal jobs.

### part 3
1. Redux store is a big object and it is kept in a central global place.
2. Any component can access it inside our application in our react.
3. It can write data and read data from that store.
4. is it a good practice to keep all the data inside the whole big object in the one big object? Yes we can keep.
Clarification:- If we keep all the data inside redux store so store does not becomes very big, very clumsy. We have something known as slices inside our redux store.

### how to write the data in redux store.
5. Why do we need slices inside redux store? 
- Suppose if we want to add cart data into our redux store, we will create a separate slice for a cart data. suppose if we want to add logged in user into our redux store. we will create separate slice for user data.

- once you create slice for cart or create slice for logged in user but initially this cart can be empty array but later on we put the data inside it. It can just modify the cart slice. 

### now how to send the data into cart.
- suppose when we click on add button data does not direct store into cart inside redux store. it means you cannot directly modify cart slice inside redux store. so how to send.
- Suppose if I click on the add button i will have to dispatch an action and after dispatching an action it calls a function and this function modify the cart slice.

- When you click on add button it dispatches an action that calls a function and this function internally modifies the cart. and this function basically known as reducer.


- When we click on add button it dispatches an action which calls the reducer function which modifies the slice which updates the slice of our redux store.


### How to read data from redux store?
- We use something known as selector.
- We will use a selector to read the data from our store and this selector will modify our react component.
- We use selector so this phenomena is known as subscribing.

- If I subscribe to the store we say that header component is subscribed to our store basically header sync with the store if the data inside my store changes my header component will update automatically.

### part 4
- Steps to use redux toolkit in our react app.
- step1. Install @reactjs/toolkit and react-redux.
- step2. Build our store
- step3. Connect our store to our app.
- step4. Slice (CartSlice)
- step5. Dispatch(action) (Write data)
- step6. Selector (Read Data)


## how to build and connect our store.
- create the file appStore.js under utils folder
- import the configureStore() function from @redux/toolkit.
- const appStore = configureStore({})

- We create the redux store using @redux/toolkit but now we have to provide the store to react application. Its kind of like a bridge between our react application and redux.so that's why this provider comes form react redux.

we import {Provider} from react-redux libray where we use.

- You have to wrap the portion where you want to use store using provider.
<Provider store={appStore}>
    <Header/>
</Provider>
store is very important key.

### How to create slices?
step1:- need to create cartSlice.js file under utils.
step2:- cartslice will be created by function known as createSlice that is import from @reactjs/toolkit.
createSlice takes a configuration to create slice.
const cartSlice = createSlice({
    name:'cart'  //slice name
    initialState: {   // this is the initial state of the cart
        item:[]
    },
    reducers:{
        addItem:(state, action)=>{  // this is reducer function that is perfom add action
            //mutating the state here.
            state.item.push(action.payload)   //payload come when we click on add button.
        },
        removeItem:(state, action) =>{
            state.item.pop()   //if you want to remove specific item then you need to use action otherwise it will remove last one item and no need to pass action as a parameter here if you are using pop.
        },
        clearItem:()=>{
            state.item.length=0 //it will empty the cart again
             //state = [] you cannot give like that it will not work.
             if you are doing like this you are just adding a reference of it not modifying
            need to read immer library to understand the above concept
        }
    }
})
 const {addItem, removeItem, clearItem} = cartSlice.actions;

 export default cartSlice.reducer


reducers also is an object.
### What is action?
An action is something known as so what can be different type of actions inside a cart you can add an item you can remove a item you can clear the cart.

- we have to export two things here first one is reducer that will be default and actions that we have created.

const {addItem, removeItem, clearItem} = cartItem.actions;
export default cartItem.reducer


- when we create slice then cartSlice return the object and object just look like this

{
    action:{
        addItem
    },
    reducer
}


### How to add slice in the store?
- we need to create reducer
- if you modify a big store it also has a reducer for itself and that reducer combines reducers of their slices. so this reducer is responsible to modify the app store.
- reducer is the combination of different small slices.

- each slice have its own reducer

import cartReducer from path;

const appStore = configureStore({
    reducer:{ this is big reducer that contain small reducer.
        cart:cartReducer,
        user:userReducer
    }
})

//Subscribing the store using selector.
we will use selector and selector is hook.
we will use useSelector hook that will be import from react-redux
const cartItems = useSelector(()=>store.cart.item); //it will access the store

### how to send the data?
import useDispatch() hook from react-redux;
const dispatch = useDispatch();
const handleAction = () => {
    dispatch(addItem('pizza'))  //dispatch function and send addItem action
}

internally it will create the payload object like that {
    payload:'pizza'
}
and we get like that action.payload


Important notes:
- whenever you are doing selector make sure you are subscribing right portion of the store.

//It is very less performance
- const store = useSelector((store)=> store)
- const cartItem = store.cart.item

// you should write like that
const cartItem = useSelector((store)=>store.cart.item)
only subscribe the small portion of the store. it is very much efficient.

- there is a lot of confusion between reducers and reducer.
ans:- when you create the app store so there the keyword reducer because that is one big reducer and that reducer can have multiple small reducers but when we create the slice that have multiple reducers


### Vanila(Older) Redux => Don't mutate state
in order version we perform task like that
const newState = [...state];
newState.item.push(action.payload)
return newState

//Redux toolkit
- We have to mutate the state 


### Note:- Behind the scene redux uses the immer library. 

### in the older version of redux we used to middlewares something known as redux thunk instead of rtk query