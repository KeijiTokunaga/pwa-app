import React from "react";

type Props = {
  filterText: string;
  inStockOnly: boolean;
  setFilterText: React.Dispatch<React.SetStateAction<string>>;
  setInStockOnly: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SearchBar: React.FC<Props> = ({
  filterText,
  inStockOnly,
  setFilterText,
  setInStockOnly,
}) => {
  const handleFilterText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
  };

  const handleInStockOnly = () => {
    setInStockOnly(!inStockOnly);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={handleFilterText}
      />
      <p>
        <input
          type="checkbox"
          defaultChecked={inStockOnly}
          onChange={handleInStockOnly}
        />{" "}
        Only show products in stock
      </p>
    </form>
  );
};
