import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../modComp/ModComponent";
import {
  emptyCart,
  getCartItems,
  getTotalPrice,
  getTotalQuantity,
} from "../../redux/cartSlice";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector(getCartItems);
  const totalPrice = useSelector(getTotalPrice);
  const totalQuantity = useSelector(getTotalQuantity);
  const dispatch = useDispatch();
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="deleteAllDiv">
      <div onClick={() => setModalActive(true)} className="deleteAll">
        <img
          className="cartIcon"
          src="https://cdn-icons-png.flaticon.com/512/126/126083.png"
          alt="cart icon"
        />
        <span className="deleteSpan">{totalQuantity} </span>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <div>
          <div className="totalRow">
            <div className="totalColumn">
              <p>Total items: {totalQuantity} </p>

              <p>Total price: $ {totalPrice} </p>
            </div>
            <img
              className="trashIcon"
              onClick={() => {
                dispatch(emptyCart());
              }}
              src="https://i.redd.it/tuloeatyw4171.gif"
              alt="trashIcon"
            />
          </div>

          {cartItems.map((cartItem, index) => (
            <CartItem key={index} cartItem={cartItem} />
          ))}
        </div>
      </Modal>
    </div>
  );
};
export default Cart;
