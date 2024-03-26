import { useEffect, useState } from "react";
import {SWIGGY_MENU_URL} from '../utils/constants.js';
import axios from 'axios';

const useRestaurentCard = (restId) => {
const [menu, setMenu] = useState([]);

    useEffect(()=>{
        const fetchMenu = async () => {
            try {
                const menuData = await axios.get(SWIGGY_MENU_URL+restId);
                setMenu(menuData)
            } catch(error) {
                console.log('Error :- ' + error);
            }
        }

        fetchMenu()
}, [])

    
    return menu;
}

export default useRestaurentCard;