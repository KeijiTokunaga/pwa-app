export type Product = {
  category: string;
  name: string;
  price: string;
  stocked: boolean;
};

export const productcolumns: any = [
  { Header: "カテゴリ", accessor: "category" },
  { Header: "商品名", accessor: "name" },
  { Header: "価格", accessor: "price" },
  { Header: "在庫", accessor: "stocked" },
];
