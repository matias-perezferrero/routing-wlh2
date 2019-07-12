import React from "react";
import products from "../products";
import Products from "./Products";
import StoreHome from "./StoreHome";

import { Link, Route } from "react-router-dom";

export default function Store(props) {
  let categories = products.reduce((categories, product) => {
    if (!categories.includes(product.category)) {
      categories.push(product.category);
    }
    return categories;
  }, []);

  return (
    <div>
      <h1>Coolest Store Ever!</h1>
      <div
        style={{
          width: "75%",
          display: "flex",
          justifyContent: "space-evenly"
        }}
      >
        {categories.map(category => {
          return (
            <Link key={category} to={`/store/${category}`}>
              {category}
            </Link>
          );
        })}
      </div>
      <Route path="/store" exact component={StoreHome} />
      <Route path="/store/:category" component={Products} />

      {/* {props.children} */}
    </div>
  );
}
