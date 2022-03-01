import { getCollection } from "./db";

export default async function useHandler(req, res) {
  const { query, method } = req;

  let handler;

  switch (method) {
    case "GET":
      handler = get;
  }

  const [status, json] = await handler(req);
  res.json(json);
}

const get = async (req) => {
  try {
    return [200, { msg: "Working fine" }];
  } catch (e) {
    return { error: e };
  }
};
