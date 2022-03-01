import { ObjectId } from "mongodb";
import { getCollection } from "../db";

// `get` the details of a specific product
// `put` updates for a product
// `delete` product by ID

const productHandler = async (req, res) => {
  const { method } = req;

  let handler;

  switch (method) {
    case "GET":
      handler = getProductData;
      break;
    case "PUT":
      handler = updateProductData;
      break;
    case "DELETE":
      handler = deleteProduct;
  }

  const [status, json] = await handler(req);
  res.status(status).json(json);
};

const getProductData = async (req) => {
  const _id = req.query.id;
  try {
    const productCollection = await getCollection("products");
    const product = await productCollection.findOne({
      _id: ObjectId(_id),
    });

    console.log(product);

    return [200, { ...product }];
  } catch (e) {
    return [500, { error: e }];
  }
};

const updateProductData = async (req) => {
  const _id = req.query.id;
  try {
    const productCollection = await getCollection("products");
    const msg = await productCollection.updateOne(
      { _id: ObjectId(_id) },
      { $set: req.body }
    );
    return [200, { msg }];
  } catch (e) {
    return [500, { error: e }];
  }
};

const deleteProduct = async (req) => {
  const _id = req.query.id;
  try {
    const productCollection = await getCollection("products");
    const msg = await productCollection.deleteOne({ _id: ObjectId(_id) });
    return [200, { msg }];
  } catch (e) {
    return [500, { error: e }];
  }
};

export default productHandler;
