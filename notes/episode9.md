## episode 9
single principle responsibility concept 
- each component have responsibility just like RestaurentCard is only used to display the menu. and header have the responsibility to show the header only. 

- Modulirity  means break your code into small small pieces.
if you write the code in modular and follow the single responsible principle so you get feature of resuability 
- so become your code resuable 
- more maintaible
- testable 


## How to create custom hook in react js?
## Why do we need custom hook?
- custom hook is not mandatory it is the good thing.
- It increase the readability of the code.
- it increase the maintainability of the code.

- According to akshay custom hook should be create inside the utils folder and create separate file for each hook.
- the good thing is give the exact same name as hook.
- hook name always start with use with a small case. useCustomHook. because react understand this.
- if you don't use as prefix does not break it just recommneded by react to recognize the hook.
- if you setup the linter it will give error if you don't use before custom hook name and other stuff.

## How to start write hook?
- finalize the contract means what is the input of the hook and what is the output of the hook.

- all the things happening on all the pages through the single js file means all the code present in the single file. 
## is it good to have one js file or bad?

- if you will make one js file of thousands of components what is the problem here the problem is that the size of js file is increase a lot 
inspect element choose js tab and see the file size.

a lot of work for browser to do making thousands call and we don't put thsounds files into one file both solution not true. so what we have to do this we will try to make smaller bunlder of these files. this process known as  
1. Chunking
2. Code Splitting
3. Dynamic Bundling
4. Lazy loading
5. On Demand Loading

## how to optimize this?
- logically break your application into smaller smaller application

- suppose your appliction deliver foods as well as grocery. so we will create the different bundler for both.

- lazy loading : lazy loading does not load everything it only render on that component we are.
- whenever user going to the particular page that only loads that page. 

## how do we create separate bundle for  grocery?
- const Grocery = lazy(()=>import('file path'))

this the fucntion that import by react package. it comes as named import {Lazy}. It will take the callback function and callback function take import name function
import() that will take the path of that component on that we are applying lazyloading.

so lazy is split the code into separate js file. network -> js

i can use lazy loading to make distribute my code into different chunks
 

suppose I have two components first one Home component without lazy loading and second one lazy laoding that is grocery component.
so we load the page then home component render but grocery component does not render due to lazy loading. and it will load when we click on grocery menu that is load on demand
 we face one issue something went wrong because grocery code takes 12 ms come to the browser so what happened react is very fast react try to load grocery component but code was not there that's why react suspended the rendering.

 how to handle this error
by using
Suspense component comes from react package.
you can wrap your component with suspense that not available on that moment. and give it place holder fallback
<Suspense fallback={...Loading}><Grocery/></Suspense>
