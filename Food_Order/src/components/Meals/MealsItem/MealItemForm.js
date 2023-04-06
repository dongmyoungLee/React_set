import classes from './MealItemForm.module.css';
import Input from "../../UI/Input";
import {useRef, useState} from "react";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const sumbitHandler = (event) => {
    event.preventDefault();

    const enterdAmount = amountInputRef.current.value;
    const enterdAmountNumber = +enterdAmount;

    if (enterdAmount.trim().length === 0 || enterdAmountNumber < 1 || enterdAmountNumber > 50) {
      setAmountIsValid(false);
      return ;
    }

    props.onAddToCart(enterdAmountNumber);
  }

  return (
      <form className={classes.form} onSubmit={sumbitHandler}>
        <Input ref={amountInputRef} label="Amount" input={{ id: 'amount_' + props.id, type: 'number', min: '1', max: '50', step: '1', defaultValue: '1'}} />
        <button>+ Add</button>
        {!amountIsValid && <p>Please enter  a valid amount (1-50)</p>}
      </form>
  );
}

export default MealItemForm;