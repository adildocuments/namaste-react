import { useSelector, useDispatch } from "react-redux";
import {clearItem} from '../utils/cartSlice';
import ItemList from "./ItemList";

const Cart = () => {
    const cartItems = useSelector((store)=>store.cart.items)
    const dispatch = useDispatch();
    const clearCartHandler = () => {
        dispatch(clearItem())
    }
    return (
        <>
            <div className="text-center m-2 p-4">
                <h1 className="font-bold text-2xl">Cart</h1>
                <div className="w-6/12 m-auto">
                    <button className="bg-black text-white p-2 rounded-md" onClick={clearCartHandler}>Clear Cart</button>
                    {cartItems.length===0 && <h1 className="m-4">Cart is empty Add items to the cart!</h1>}
                    <ItemList items={cartItems} />
                </div>
            </div>
        </>
    )
}

export default Cart;