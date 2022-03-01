import { getCollection } from "../db";

//requests to the transaction endpoint

const transactionHandler = async (req, res) => {
  const { query, method } = req;

  let handler;

  switch (method) {
    case "GET":
      handler = getTransactions;
      break;

    case "POST":
      handler = makeTransaction;
      break;
  }

  const [status, json] = await handler(req);

  res.status(status).json(json);
};

const getTransactions = async (req) => {
  try {
    const date = new Date();
    req.body.date = date;

    const transactionCollection = await getCollection("transactions");
    const transactions = await transactionCollection.find({}).toArray();
    return [
      200,
      {
        transactions,
      },
    ];
  } catch (e) {}
};

const makeTransaction = async (req) => {
  try {
    const transactionCollection = await getCollection("transactions");
    const newTransaction = req.body;
    const msg = await transactionCollection.insertOne(newtransaction);

    const _id = msg.insertedId.toString();
    return [
      200,
      {
        transaction: {
          ...newTransaction,
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

export default transactionHandler;
