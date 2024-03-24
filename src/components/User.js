import {useState} from 'react';
const User = (props) => {
    const {name, location, email} = props;
    const [count, setCount] = useState(0);
    const [count2] = useState(1);
    return (
        <>
            <div className="user-card">
                <h1>Function Component Properties</h1>
                <h2>Count:{count}</h2>
                <h2>Count:{count2}</h2>
                <button onClick={()=>{
                    setCount(count+1)
                }}>Count Increase</button>
                <p>Name: {name}</p>
                <p>Location: {location}</p>
                <p>Email: {email}</p>
            </div>
        </>
    )
}

export default User;