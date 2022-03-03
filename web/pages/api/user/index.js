import { getCollection } from "../db";

//requests to the user endpoint

const userHandler = async (req, res) => {
  const { query, method } = req;

  let handler;

  switch (method) {
    case "GET":
      handler = getUsers;
      break;

    case "POST":
      handler = post;
      break;
  }

  const [status, json] = await handler(req);

  res.status(status).json(json);
};

const getUsers = async (req) => {
  try {
    const userCollection = await getCollection("users");
    const users = await userCollection.find({}).toArray();
    return [
      200,
      {
        users,
      },
    ];
  } catch (e) {}
};

const post = async (req) => {
  console.log(req.body);
  try {
    const date = new Date();
    req.body.date = date;

    const userCollection = await getCollection("users");
    const newUser = req.body;
    const msg = await userCollection.insertOne(newUser);

    const _id = msg.insertedId.toString();
    return [
      200,
      {
        user: {
          ...newUser,
          _id,
        },
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

export default userHandler;
