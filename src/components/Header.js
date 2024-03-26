import {LOGO_URL} from '../utils/constants';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import useStatusOnline from '../utils/useStatusOnine';
import { MdOutlineOnlinePrediction } from "react-icons/md";
import { IoCloudOfflineSharp } from "react-icons/io5";


const Header = () => {
    const [btnName, setBtnName] = useState('Login');
    const onlineStatus = useStatusOnline();
    
    // let btnName = 'Login';
    useEffect(()=>{
        console.log('use Effect Header')
    }, []);
    console.log('header-render')
    return (
        <>
            <div className='header'>
                <img src={LOGO_URL} alt="Naaz Store" className='logo' />
                <div className='nav-items'>
                    <ul>
                        <li>{onlineStatus?<MdOutlineOnlinePrediction/>:<IoCloudOfflineSharp/>}</li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/grocery">Grocery</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li>Cart</li>
                        <li><button className='btn-login' onClick={()=>{
                            // btnName = 'Logout';
                            (btnName === 'Login')?setBtnName('Logout'):setBtnName('Login');
                        }}>{btnName}</button></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Header;