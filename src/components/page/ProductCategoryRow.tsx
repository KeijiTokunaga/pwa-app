import React from "react";

type Props = {
  category: string;
};

export const ProductCategoryRow: React.FC<Props> = ({ category }) => {
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  );
};
