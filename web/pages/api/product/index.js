import { getCollection } from "../db";

//requests to the product endpoint

const productHandler = async (req, res) => {
  const { method } = req;

  let handler;

  switch (method) {
    case "GET":
      handler = getProducts;
      break;

    case "POST":
      handler = postNewProduct;
      break;
  }

  const [status, json] = await handler(req);

  res.status(status).json(json);
};

const getProducts = async (req) => {
  try {
    const productCollection = await getCollection("products");
    const products = await productCollection.find({}).toArray();
    return [
      200,
      {
        products,
      },
    ];
  } catch (e) {}
};

const postNewProduct = async (req) => {
  try {
    const date = new Date();
    req.body.date = date;

    const productCollection = await getCollection("products");
    const newProduct = req.body;
    const msg = await productCollection.insertOne(newProduct);

    const _id = msg.insertedId.toString();
    return [
      200,
      {
        product: {
          ...newProduct,
          _id,
        },
        msg,
      },
    ];
  } catch (e) {
    console.log(e);
    return [
      500,
      {
        error: e,
      },
    ];
  }
};

export default productHandler;
