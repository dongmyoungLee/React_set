import classes from './Cart.module.css';
import Modal from "../UI/Modal";
import {useContext, useState} from "react";
import cartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const cartCtx = useContext(cartContext);
  const [isCheckOut, setIsCheckOut] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const totalAmount = `￦${cartCtx.totalAmount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  }
  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  }

  const orderHandler = () => {
    setIsCheckOut(true);
  }

  const submitOrderData = async (userData) => {
    setIsSubmitting(true);
    await fetch('https://react-http-71c82-default-rtdb.firebaseio.com/order.json', {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items,
      })
    });
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  }

  const cartItems = (
      <ul className={classes['cart-items']}>
        {cartCtx.items.map((item, idx) => (
            <CartItem key={idx} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)} >{item.name}</CartItem>
        ))}
      </ul>
  );

  const modalAction =  (
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onModalHide}>Close</button>
        {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
      </div>
  );

  const cartModalContents = (
      <>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        {isCheckOut && <Checkout onConfirm={submitOrderData} onCancel={props.onModalHide} />}
        {!isCheckOut && modalAction}
      </>
  );

  const isSubmittingModalContent = <p>주문이 진행 중..</p>;
  const didSubmitModalContent = (
      <>
        <p>정상적으로 주문 되었습니다.</p>
        <div className={classes.actions}>
          <button className={classes.button} onClick={props.onModalHide}>닫기</button>
        </div>
      </>
  );

  return (
    <Modal onModalHide={props.onModalHide}>
      {!isSubmitting && !didSubmit && cartModalContents}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
}

export default Cart;