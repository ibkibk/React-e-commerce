import React from "react";
import BasketItem from "./BasketItem";

function BasketList({ value }) {
  const { basket } = value;
  return (
    <div className="container-fluid">
      {basket.map((item) => {
        return <BasketItem key={item.id} item={item} value={value} />;
      })}
    </div>
  );
}

export default BasketList;
