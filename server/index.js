import express from "express";
import cors from "cors";
import { port } from "./config.js";
import { getUsers } from "./configs/database.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/visitors", async (req, res) => {
  const visitors = await getVisitors();
  res.send(visitors);
});

app.get("/users", async (req, res) => {
  const students = await getUsers();
  res.send(students);
});

app.get("/visitors/:id", async (req, res) => {
  const id = req.params.id;
  const student = await getStudent();
  res.send(students);
});

app.post("/users", async (req, res) => {
  const { area, name, company } = req.body;
  const visitor = await createVisitor(name, company, "age");
  res.send(visitor);
});

app.listen(port, () => {
  console.log(`App is lsitening to port ${port}`);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
