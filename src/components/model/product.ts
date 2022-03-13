export type Product = {
  category: string;
  name: string;
  price: string;
  stocked: boolean;
};

export type Columns = {
  title: string;
  dataIndex: string;
  key: string;
};

export const COLUMNS: Columns[] = [
  {
    title: "カテゴリ",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "プライス",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "在庫",
    dataIndex: "stoked",
    key: "stoked",
  },
  {
    title: "商品名",
    dataIndex: "name",
    key: "name",
  },
];

export const PRODUCTS: Product[] = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];
