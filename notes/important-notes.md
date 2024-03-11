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
