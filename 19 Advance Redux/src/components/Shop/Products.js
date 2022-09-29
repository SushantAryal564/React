import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title="Nike AirForce"
          price={6}
          description="This is a first product - amazing!"
        />
        <ProductItem
          title="Nike Dunk"
          price={8}
          description="This is nice Product"
        />
        <ProductItem
          title="Nike JoyRide"
          price={10}
          description="This is nice Shoe"
        />
      </ul>
    </section>
  );
};

export default Products;
