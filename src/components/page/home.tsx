import React from "react";
import styled from "styled-components";

export const Home: React.FC = () => {
  return (
    <>
      <CustomButton>AAAAAAAAA</CustomButton>
    </>
  );
};

// 基本的なstyled-componentsの使い方
const CustomButton = styled.button`
  color: blue;
  font-weight: bold;
`;
