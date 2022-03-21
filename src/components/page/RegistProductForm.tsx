import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "./RegistProductForm.css";
import { Product } from "../model/product";
import firebase from "firebase/compat/app";

export const RegistProductForm: React.VFC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Product>();
  const onSubmit: SubmitHandler<Product> = (data) => {
    const db = firebase.firestore();
    db.collection("product")
      .add(data)
      .then((docRef) => {
        console.log("success");
      })
      .catch((error) => {
        // error
        console.log("err");
      });
    console.log("onSubmit:", data);
  };

  console.log("watch:", watch("category"));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="カテゴリ"
        {...register("category", { required: true, maxLength: 80 })}
      />
      {errors.category && "カテゴリが入力されていません"}
      <input
        type="text"
        placeholder="商品名"
        {...register("name", { required: true, maxLength: 100 })}
      />
      <input
        type="number"
        placeholder="価格"
        {...register("price", { required: true, min: 0, max: 10000000000 })}
      />
      <select {...register("stocked")}>
        <option value="true">あり</option>
        <option value="false">なし</option>
      </select>

      <input type="submit" />
    </form>
  );
};
