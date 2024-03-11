# Episode 4
- Before starting project to create the visualization of the page and component.
- you can use draw.io crete the wireframe.

## how to link css in react js
- there are many types to link css in react
- external css
- inline css
- we can not write inline css like html it take javascript object 
- example <div style={{}}></div> first one curly braces use for jsx because js write in jsx using curly braces. <div style={{backgroundColor:red}}></div>  like that
or you can create separate object and pass inside the style attribute.
const styleCss = {backgroundColor:"red", color:"blue", padding:"10px"}
- <div style={styleCss}></div>  like that

- in React you can use module css if you want to write component wise css otherwise it will take globally css from single css file.
- you can write whole css in sigle page becasue it take only single page css from everywhere without import in any component only import in main component like app.js just only.

- inline css is not recommonded

- So whenever you have to pass dynamically data to the components you can pass through props.  
- react wrap all props into a single object for single component.
- example:-
- <Card name="adil", address="noida"></Card> 
- const Card = (props) =>{}

- there are two layer 1. UI layer 2. Data layer