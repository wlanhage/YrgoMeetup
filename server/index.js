import express from "express";
import cors from "cors";
import { port } from "./config.js";

import {
  getCompanys,
  createCompany,
  getStudents,
  createStudent,
  getLanguages,
} from "./configs/database.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.get("/companys", async (req, res) => {
  const companys = await getCompanys();
  res.send(companys);
});

app.get("/students", async (req, res) => {
  const students = await getStudents();
  res.send(students);
});

app.get("/languages", async (req, res) => {
  const languages = await getLanguages();
  res.send(languages);
});

app.post("/companys", async (req, res) => {
  const { company, email, phone, linkedin, textfield, web, design } = req.body;
  const createdCompany = await createCompany(
    company,
    email,
    phone,
    linkedin,
    textfield,
    web,
    design
  );
});

app.post("/students", async (req, res) => {
  const {
    firstname,
    lastname,
    developer,
    designer,
    email,
    phone,
    linkedin,
    textfield,
    password,
  } = req.body;
  const createdStudent = await createStudent(
    firstname,
    lastname,
    developer,
    designer,
    email,
    phone,
    linkedin,
    textfield,
    password
  );
});

app.listen(port, () => {
  console.log(`App is listening to port ${port}`);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
