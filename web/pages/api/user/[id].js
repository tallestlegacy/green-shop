import { ObjectId } from "mongodb";
import { getCollection } from "../db";

// `get` the details of a specific user
// `put` updates for a user
// `delete` user by ID

const userHandler = async (req, res) => {
  const { method } = req;

  let handler;

  switch (method) {
    case "GET":
      handler = getUserData;
      break;
    case "PUT":
      handler = updateUserData;
      break;
    case "DELETE":
      handler = deleteUser;
  }

  const [status, json] = await handler(req);
  res.status(status).json(json);
};

const getUserData = async (req) => {
  const _id = req.query.id;
  try {
    const userCollection = await getCollection("users");
    const user = await userCollection.findOne({ _id: ObjectId(_id) });
    return [200, { user }];
  } catch (e) {
    return [500, { error: e }];
  }
};

const updateUserData = async (req) => {
  const _id = req.query.id;
  try {
    const userCollection = await getCollection("users");
    const msg = await userCollection.updateOne(
      { _id: ObjectId(_id) },
      { $set: req.body }
    );
    return [200, { msg }];
  } catch (e) {
    return [500, { error: e }];
  }
};

const deleteUser = async (req) => {
  const _id = req.query.id;
  try {
    const userCollection = await getCollection("users");
    const msg = await userCollection.deleteOne({ _id: ObjectId(_id) });
    return [200, { msg }];
  } catch (e) {
    return [500, { error: e }];
  }
};

export default userHandler;
