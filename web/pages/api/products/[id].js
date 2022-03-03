import { ObjectId } from "mongodb";
import { getCollection } from "../db";

// `get` products from a specific user

const productHandler = async (req, res) => {
  const { method } = req;

  let handler = getProducts;

  const [status, json] = await handler(req);
  console.log(json);
  res.status(status).json(json);
};

const getProducts = async (req) => {
  const seller_id = req.query.id;
  try {
    const productCollection = await getCollection("products");
    const products = await productCollection
      .find({
        seller_id: ObjectId(seller_id),
      })
      .toArray();
    return [200, { products }];
  } catch (e) {
    return [500, { error: e }];
  }
};

export default productHandler;
