import {LOGO_URL} from '../utils/constants';
import {useState} from 'react';

const Header = () => {
    const [btnName, setBtnName] = useState('Login');
    // let btnName = 'Login';
    console.log('header-render')
    return (
        <>
            <div className='header'>
                <img src={LOGO_URL} alt="Naaz Store" className='logo' />
                <div className='nav-items'>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
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