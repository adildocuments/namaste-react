// import User from './User';
// import UserClass from './UserClass';
// const About = () =>{
//     return (
//         <>
//             <h1>This is About page</h1>
//             <User name={'Adil Ali'} location={'Delhi'} email={'adil@yopmail.com'}/>
//             <UserClass name={'Najma Parveen'} location={'Ghaziabad'} email={'najma@yopmail.com'}/>
//         </>
//     );
// }

// export default About;


import Profile  from "./Profile";
import { Component } from "react";

class About extends Component{
    constructor(){
        console.log('parent constructor')
        super()
    }
    componentDidMount(){
        console.log('parent component did mount')
    }
    render(){
        console.log('parent render')
        return(
            <>
                <h1>This is About page</h1>
                <Profile/>
            </>
        )
    }

}

export default About;


