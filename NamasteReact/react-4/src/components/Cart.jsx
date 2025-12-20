import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store)=> store.cart.items)
      const dispatch = useDispatch();
    const handleClearItem =()=>{
        dispatch(clearItem())
    }

  return (
    //  <div className="text-center m4 p-4">
    //     <div className="w-6/12 m-auto">
    //         {/* <h1 className="text-2xl font-bold">Cart</h1> */}
    //     {/* how to add cart items  */}

        
    //         <button onClick={handleClearItem}>Clear Cart</button>
    //         <ItemList items={cartItems}/>
    //     </div>
    //  </div>
    
    <div className="text-center m4 p-4">
           <div className="w-6/12 m-auto">
             <h1 className="text-2xl font-bold">Cart</h1>
              <button onClick={handleClearItem}>Clear Cart</button>
              <ItemList items={cartItems}/>
           </div>
    </div>
    );
};

export default Cart;


