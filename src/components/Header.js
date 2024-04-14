import {LOGO_URL} from '../utils/constants';
import {useState, useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import useStatusOnline from '../utils/useStatusOnine';
import UserContext from '../utils/UserContext';
import {useSelector} from 'react-redux';
// import store from '../utils/appStore';



const Header = () => {
    const [btnName, setBtnName] = useState('Login');
    const onlineStatus = useStatusOnline();
    // ({loggedInUser} = useContext(UserContext));
    const {loggedInUser} = useContext(UserContext);
    
    const cartItems = useSelector((store)=>store.cart.items)
    // console.log(cartItems);
    // let btnName = 'Login';
    useEffect(()=>{
        // console.log('use Effect Header')
    }, []);
    // console.log('header-render')
    return (
        <>
            <div className='flex justify-between bg-pink-200 shadow-md m-2'>
                <img src={LOGO_URL} alt="Naaz Store" className='w-24 h-24' />
                <div className='nav-items'>
                    <ul className="flex p-4 m-4 text-lg font-semibold ">
                        <li className='px-2'><Link to="/">Online Status{onlineStatus?' ✅':' 🔴'}</Link></li>
                        <li className='px-2'><Link to="/">Home</Link></li>
                        <li className='px-2'><Link to="/about">About Us</Link></li>
                        <li className='px-2'><Link to="/grocery">Grocery</Link></li>
                        <li className='px-2'><Link to="/contact">Contact Us</Link></li>
                        <li className='px-2'><Link to="/cart">Cart-{'('+cartItems.length +' items)' }</Link></li>
                        <li><button className='btn-login' onClick={()=>{
                            // btnName = 'Logout';
                            (btnName === 'Login')?setBtnName('Logout'):setBtnName('Login');
                        }}>{btnName}</button></li>
                        <li className='px-2'>{loggedInUser}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Header;