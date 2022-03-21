import { useState, useEffect } from "react";
import "./App.css";
import { FilterableProductTable } from "./components/page/FilterableProductTable";
import { Product } from "./components/model/product";
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";
import { firebaseConfig } from "./components/functional/firebase";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { RegistProductForm } from "./components/page/RegistProductForm";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const db = firebase.firestore();
    db.collection("product")
      .get()
      .then((result) => {
        const data = result.docs.map((d) => ({
          id: d.id,
          category: d.data().category,
          name: d.data().name,
          price: d.data().price,
          stocked: d.data().stocked,
        }));
        setProducts(data);
      });
  }, []);

  return (
    <Tabs>
      <TabList>
        <Tab>検索</Tab>
        <Tab>登録</Tab>
      </TabList>
      <TabPanel>
        <FilterableProductTable products={products} />
      </TabPanel>
      <TabPanel>
        <RegistProductForm />
      </TabPanel>
    </Tabs>
  );
}

export default App;
