import classes from './Cart.module.css';
import Modal from "../UI/Modal";
import {useContext} from "react";
import cartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(cartContext);

  const totalAmount = `￦${cartCtx.totalAmount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {

  }
  const cartItemaddHandler = (item) => {

  }

  const cartItems = (
      <ul className={classes['cart-items']}>
        {cartCtx.items.map((item) => (
            <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemaddHandler.bind(null, item)} >{item.name}</CartItem>
        ))}
      </ul>
  );

  return (
    <Modal onModalHide={props.onModalHide}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onModalHide}>Close</button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;