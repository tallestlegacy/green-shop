import Input from "./Input";
import { useState } from "react";

import styles from "./Form.module.css";
import Button from "./Button";

export default function AddProduct({ seller_id }) {
  const [product, setProduct] = useState({});

  const [isPopping, setIsPopping] = useState(false);

  if (isPopping)
    return (
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="">Seller ID : </label>
                </td>
                <td>
                  <span>{seller_id}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="">Product Type</label>
                </td>
                <td>
                  <select name="category">
                    <option value="plant">Plant Product</option>
                    <option value="animal">Animal Product</option>
                  </select>
                </td>
              </tr>
              <Input
                value={product}
                setValue={setProduct}
                name="name"
                type="text"
                title="Product Name"
              />
              <Input
                value={product}
                setValue={setProduct}
                name="description"
                type="text"
                title="Description"
              />
              <Input
                value={product}
                setValue={setProduct}
                name="quantity"
                type="number"
                title="Quantity"
              />

              <Input
                value={product}
                setValue={setProduct}
                name="price"
                type="number"
                title="Price per unit"
              />
            </tbody>
          </table>
          <div className={styles.buttonContainer}>
            <Button
              title="Submit"
              onClick={() => {
                setIsPopping(false);
              }}
            />{" "}
            <Button
              title="Cancel"
              onClick={() => {
                setIsPopping(false);
              }}
            />
          </div>
        </form>
      </div>
    );

  return (
    <Button
      title="Add Product"
      onClick={() => {
        setIsPopping(true);
      }}
    />
  );
}
