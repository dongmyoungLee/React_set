import {useState} from "react";
import Header from './components/Layout/Header';
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [modalShown, setModalShown] = useState(false);

  const showModalHandler = () => {
    setModalShown(true);
  }

  const hideModalHandler = () => {
    setModalShown(false);
  }

  return (
    <CartProvider>
      {modalShown && <Cart onModalHide={hideModalHandler} />}
      <Header onModalShow={showModalHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
