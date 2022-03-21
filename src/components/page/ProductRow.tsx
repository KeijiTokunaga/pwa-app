import React from "react";
import { Product } from "../model/product";
import styled from "styled-components";

type Props = {
  product: Product;
};

export const ProductRow: React.FC<Props> = ({ product }) => {
  //タイトル
  const Title = styled.td`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;

  //ラッパー
  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  `;

  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );
  return (
    <Wrapper>
      <tr>
        <Title>{name}</Title>
        <Title>{product.price}</Title>
      </tr>
    </Wrapper>
  );
};
