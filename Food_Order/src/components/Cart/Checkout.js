import classes from './Checkout.module.css';
import {useRef, useState} from "react";

const isEmpty = value =>  value.trim() === '';
const isFiveChars = value => value.trim().length > 5;

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalICode: true,
  });

  const nameInput = useRef();
  const streetInput = useRef();
  const postalInput = useRef();
  const cityInput = useRef();


  const confirmHandler = (event) => {
    event.preventDefault();

    const enterdName = nameInput.current.value;
    const enterdStreet = streetInput.current.value;
    const enterdPostal = postalInput.current.value;
    const enterdCity = cityInput.current.value;

    const enterdNameValid = !isEmpty(enterdName);
    const enterdStreetValid = !isEmpty(enterdStreet);
    const enterdPostalValid = isFiveChars(enterdPostal);
    const enterdCityValid = !isEmpty(enterdCity);

    setFormInputValidity({
      name: enterdNameValid,
      street: enterdStreetValid,
      city: enterdCityValid,
      postalICode: enterdPostalValid
    });

    const formIsValid = enterdNameValid && enterdStreetValid && enterdPostalValid && enterdCityValid;

    if (!formIsValid) {
      return ;
    }

    props.onConfirm({
      name: enterdName,
      street: enterdStreet,
      postalICode: enterdPostal,
      city: enterdCity
    });
  };

  const inputReponsiveValid = (e) => {

    switch (e.target.id) {
      case 'name' :
        setFormInputValidity({
          name: true,
          street: formInputValidity.street,
          city: formInputValidity.city,
          postalICode: formInputValidity.postalICode,
        });
      break;

      case 'street' :
        setFormInputValidity({
          name: formInputValidity.name,
          street: true,
          city: formInputValidity.city,
          postalICode: formInputValidity.postalICode,
        });
      break;

      case 'postal' :

        if (isFiveChars(e.target.value)) {
          setFormInputValidity({
            name: formInputValidity.name,
            street: formInputValidity.street,
            city: formInputValidity.city,
            postalICode: true,
          });
        }

      break;

      case 'city' :
        setFormInputValidity({
          name: formInputValidity.name,
          street: formInputValidity.street,
          city: true,
          postalICode: formInputValidity.postalICode,
        });
      break;
    }

  }

  const nameControlClasses = `${classes.control} ${formInputValidity.name ? '' : classes.invalid}`;
  const streetControlClasses = `${classes.control} ${formInputValidity.street ? '' : classes.invalid}`;
  const postalControlClasses = `${classes.control} ${formInputValidity.postalICode ? '' : classes.invalid}`;
  const cityControlClasses = `${classes.control} ${formInputValidity.city ? '' : classes.invalid}`;

  return (
      <form className={classes.form} onSubmit={confirmHandler}>
        <div className={nameControlClasses}>
          <label htmlFor='name'>Your Name</label>
          <input type='text' id='name' ref={nameInput} onChange={inputReponsiveValid} />
        </div>
        <div className={streetControlClasses}>
          <label htmlFor='street'>Street</label>
          <input type='text' id='street' ref={streetInput} onChange={inputReponsiveValid} />
        </div>
        <div className={postalControlClasses}>
          <label htmlFor='postal'>Postal Code</label>
          <input type='text' id='postal' ref={postalInput} onChange={inputReponsiveValid} />
          {!formInputValidity.postalICode && <p>5자 이상 입력하세요.</p>}
        </div>
        <div className={cityControlClasses}>
          <label htmlFor='city'>City</label>
          <input type='text' id='city' ref={cityInput} onChange={inputReponsiveValid} />
        </div>
        <div className={classes.actions}>
          <button type='button' onClick={props.onCancel}>
            Cancel
          </button>
          <button className={classes.submit}>Confirm</button>
        </div>
      </form>
  );
};

export default Checkout;