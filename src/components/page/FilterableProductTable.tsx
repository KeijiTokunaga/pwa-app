import React, { useState } from "react";
import { SearchBar } from "./SearchBar";
import { ProductTable } from "./ProductTable";
import { Product } from "../model/product";

type Props = {
  products: Product[];
};

export const FilterableProductTable: React.FC<Props> = ({ products }) => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        setFilterText={setFilterText}
        setInStockOnly={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </>
  );
};
