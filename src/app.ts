import express, { Application, Request, Response, NextFunction } from "express";
const PORT = 4000;

const app: Application = express();

const add = (a: number, b: number): number => {
  return a + b;
};

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  console.log(add(5, 5));

  res.send("llo");
});

app.listen(PORT, () => console.log("Server running"));
