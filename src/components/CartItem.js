import React from 'react';
import { ChevronDown, ChevronUp } from '../icons';
import { useDispatch } from 'react-redux';
import { removeItem } from '../features/cart/cartSlice';
import { increase } from '../features/cart/cartSlice';
import { decrease } from '../features/cart/cartSlice';

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch=useDispatch();
  const handleRemove=()=>{
    dispatch(removeItem(id))
  }
  const handleIncrease=()=>{
    dispatch(increase(id))
  }
  const handleDecrease=()=>{
    if(amount>1)
    dispatch(decrease(id))
  }
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        {/* remove button */}
        <button className='remove-btn' onClick={handleRemove}>remove</button>
      </div>
      <div>
        {/* increase amount */}
        <button className='amount-btn' onClick={handleIncrease}>
          <ChevronUp />
        </button>
        {/* amount */}
        <p className='amount'>{amount}</p>
        {/* decrease amount */}
        <button className='amount-btn'onClick={handleDecrease}>
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;