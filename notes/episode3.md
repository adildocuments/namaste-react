## Episode 3 ###
# When you go to new company and you got the task to create build so how to check what command is used to create the build in this project. 
## So you should go to package.json and see the script so under the script you will get the command like start, build this is the company standard.

# If you create the script in package.json file to create development build like that 
# "start" : "parcel index.html"   so how to run this command
# npm run start :::: you can use shorthand of this command  npm start becasue start is reserved word by npm that's why shorthand command work fine for it.

# npm parcel index.html to create build for development phase
# npm parcel build index.html to create build for production phase

# notes: "build" : "parcel build index.html"
# npm run build :::: you can not use shorthand of this commmand like that npm build. It will thrown error.

# react element is not a html element. if you write like that React.createElement so it will create the object. In the end react element is object. but when we render this element onto the dom then it becomes the html element

## root.render does not append it only replace the data.
# const root = reactDOM.createRoot(document.getElementById("root"));
# root.render(heading); 
## reactDOM convert the generate react object into html element inside the root div. with the help of render function.


### JSX
# JSX is a JavaScript syntax which is easier to create react eleement. JSX is not part of the react both are separate. we can write react without jsx also. we can create complex application but jsx makes developer life easy. that's why we use jsx
# jsx is a convention that is merge html and JavaScript together.

# note: most of the developer think we write html inside JavaScript answer is a big No. 
# - jsx is diffrent from html.
# - jsx is not html jsx is html like syntax.
# - jsx is diffrent syntax.
# - react is diffrent from jsx and html and jsx is different from html and react every thing is diffrent to each other.

# line 1 const jsxHeading = <h1>Namaste React using JSX</h1>
# const heading  = React.createElement("h1", {id:"heading"}, "Namaste React using React")
# line 1 is equivilent to line 2 code.
# How to work jsx 
# when this piece of code <h1>Namaste React using JSX</h1> executed this piece of code becomes react of element.

# JS engine does not understand the jsx js engine only understand the echa script.

# if jsx code does not understood by js engine so how to render jsx code in browser?
# parcel is doing the job behind the scene. 
# jsx (transpiled before it reaches the js engine) transpiled means converted to the code that browser can understand

# who transpiled this code?
# parcel
# parcel does not do this job itself it give the resposibility to package that is babel
# babel is transpiling the code.
# babel is the javascript compiler.
# when you put the jsx code it is converted to React.createElement behind the scene and ReactElement make the js object and then html

# who is converting jsx code to React.createElement?
# ans:- Babel convert this.

# Babel
# - babel is traspiler
# - babel is js compiler
# - older browser does not understand the es6 js code. babel transpile the es6 into core js code and older browser does understand.
# babel is js library.

# attribute will be write in camelCase only in jsx. like className, tabIndex

# if jsx code in the single there is no need to wrap with parentheses.
# if you want to write the code in multiple line you have to wrap with parenthesis.
# const jsxHeading = (<h1 className="head">
#    Namaste React using jsx
# </h1>)
# because babel needs to understand  where is jsx starting and where is jsx ending so it is required. if you write in single line so no need to wrap.

## --------------------------React Components------------------------ ##

# There are two types of components
# - Function Based Component New
# - Class Based Component Old

# What is React Functional Component
# - React Funcitonal Component just like javascript function which return some piece of jsx code or react element code.
# - It returns the react element.
# - It returns the bunch of react element.
# - Component name should be Capitilize otherwise you will get error.

# we render react element like that root.render(heading)
# we render react component like that root.render(<Heading />) using angle brackets
# babel understand this is component by angle brack. Element will be wrapped by angle brack so it will be react component.

# what is component composition ?
# The process of combining smaller and reusable component together to create large, more complex components.


# headingComponent - This is pascal case

# how to put react element inside the react component?

# const title = (<h1 className="heading">Namaste React Using JSX</h1>)
# it is react element but it is also javaScript varibale so we can render inside the component like that {title} because javaScript all expression we will wrap by curly braces.

# There are three types to render components in react
# - {Heading()}
# - <Heading></Heading>
# - <Heading />
# you can render component inside root component