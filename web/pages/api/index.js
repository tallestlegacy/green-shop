export default function useHandler(req, res) {
  const { query, method } = req;

  switch (method) {
    case "GET":
      res.status(200).json({ msg: "Hello from the other side" });
  }
}
