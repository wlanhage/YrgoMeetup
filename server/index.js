import express from "express";
import { port } from "./config.js";

import {
  getStudents,
  getStudent,
  createStudent,
  getVisitors,
  getUsers,
} from "./configs/database.js";

const app = express();
app.use(express.json());

app.get("/visitors", async (req, res) => {
  const visitors = await getVisitors();
  res.send(visitors);
});

app.get("/users", async (req, res) => {
  const users = await getUsers();
  res.send(users);
});

app.get("/students", async (req, res) => {
  const students = await getStudents();
  res.send(students);
});

app.get("/visitors/:id", async (req, res) => {
  const id = req.params.id;
  const student = await getStudent();
  res.send(students);
});

app.post("/visitors", async (req, res) => {
  const { area, name, company } = req.body;
  const visitor = await createStudent(area, name, company);
  res.send(visitor);
});

app.listen(port, () => {
  console.log(`App is lsitening to port ${port}`);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
