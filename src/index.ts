import express from "express";
import router from "./presentaion/router";
import mongoDbConnection from "./application/db/mongoose/mongoose";
import "reflect-metadata";

const port = process.env.PORT || 3000;

// mongo db connect
mongoDbConnection();

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.all("*", async (req: express.Request, res: express.Response) => {
  const message = `Can't find this route: ${req.originalUrl}`;

  res.status(404).json({
    status: false,
    result: message,
  });
});

app.listen(port, () => {
  console.log(`server is running at port :${port} ...`);
});

export default app;
