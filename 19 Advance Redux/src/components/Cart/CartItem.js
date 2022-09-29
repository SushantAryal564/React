import classes from "./CartItem.module.css";
import { useSelector } from "react-redux";
import { Fragment } from "react";

const CartItem = (props) => {
  const cartItems = useSelector((state) => state.cartItem.items);
  console.log(cartItems);
  const itemsList = cartItems.map((item) => (
    <li className={classes.item}>
      <header>
        <h3>{item.title}</h3>
        <div className={classes.price}>
          ${item.total.toFixed(2)}{" "}
          <span className={classes.itemprice}>
            (${item.price.toFixed(2)}/item)
          </span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{item.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button>-</button>
          <button>+</button>
        </div>
      </div>
    </li>
  ));
  console.log(itemsList);
  // const { title, quantity, total, price } = props.item;
  return <Fragment>{itemsList}</Fragment>;

  // <li className={classes.item}>
  //   <header>
  //     <h3>{title}</h3>
  //     <div className={classes.price}>
  //       ${total.toFixed(2)}{" "}
  //       <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
  //     </div>
  //   </header>
  //   <div className={classes.details}>
  //     <div className={classes.quantity}>
  //       x <span>{quantity}</span>
  //     </div>
  //     <div className={classes.actions}>
  //       <button>-</button>
  //       <button>+</button>
  //     </div>
  //   </div>
  // </li>
};

export default CartItem;
