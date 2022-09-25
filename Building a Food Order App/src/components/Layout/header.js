import React from 'react';
import image from '../../assests/meals.jpg';
import classes from "./header.module.css";
import HeaderCartButton from './HeaderCartButton';
const Header = (props) =>{
  return(
    <React.Fragment>
      <header className = {classes.header} > 
        <h1>React Meal</h1>
        <HeaderCartButton onClick = {props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={image} alt="a table full of delicious food"/>
      </div>
    </React.Fragment>
  )
}
export default Header;