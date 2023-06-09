import { useEffect } from "react";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals } from "./features/cart/cartSlice";

function App() {
  const {cartItems}=useSelector((store)=>store.cart)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(calculateTotals())
  },[cartItems,dispatch])

  return (
    <>
      <Navbar />
      <CartContainer/>
    </>
  )
}
export default App;
