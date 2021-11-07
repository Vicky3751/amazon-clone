import React from "react";
import { UseStateValue } from "./StateProvider";
import "./Product.css";
function product({ id,title, image, price, rating }) {
  const [{basket}, dispatch] = UseStateValue();
  console.log("this is the basket",basket)
  console.log(basket.length)
  const addToBasket = () => {
      dispatch({
          type:'ADD_TO_BASKET',
          item:{
              id:id,
              title:title,
              image:image,
              price: price,
              rating:rating,
          },
      });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <img className="product__img" src={image} />
        <button className="product__btn" onClick={addToBasket}>
          Add to Basket
        </button>
      </div>
    </div>
  );
}

export default product;
