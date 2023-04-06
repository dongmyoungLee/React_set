import react, {useContext} from "react";
import classes from './MealItem.module.css';
import MealItemForm from "./MealItemForm";
import cartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const price = `￦${props.price}`;
  const cartCtx = useContext(cartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id : props.id,
      name : props.name,
      amount : amount,
      price : props.price,
    })
  }

  return (
      <li className={classes.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
        <div>
          <MealItemForm onAddToCart={addToCartHandler} key={props.id} id={props.id} name={props.name} description={props.description} price={props.price} />
        </div>
      </li>
  );
}

export default MealItem;