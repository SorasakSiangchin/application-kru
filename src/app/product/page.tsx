import React from "react";

type Props = {
  searchParams: {
    name?: string;
    price?: number;
  };
};

function Product({ searchParams: { name, price } }: Props) {
  return (
    <div>
      Product = name : {name} , price :{price}
    </div>
  );
}

export default Product;
