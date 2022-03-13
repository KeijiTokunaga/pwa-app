import React from "react";
import { Product } from "../model/product";

type Props = {
  product: Product;
};

export const ProductRow: React.FC<Props> = ({ product }) => {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
};
