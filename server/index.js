import express from "express";
import cors from "cors";
import { port } from "./config.js";
import bcrypt from "bcryptjs";
import he from "he";

import {
  getCompanys,
  createCompany,
  getStudents,
  createStudent,
  getStudentCredentials,
  getLanguages,
  getCompanyLanguages,
  getCompanySoftwares,
  getStudentLanguages,
  getStudentSoftwares,
  getCards,
} from "./configs/database.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Private-Network", true);
  //  Firefox caps this at 24 hours (86400 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.
  res.setHeader("Access-Control-Max-Age", 7200);
  next();
});

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

app.get("/company_languages", async (req, res) => {
  const companyLanguages = await getCompanyLanguages();
  res.send(companyLanguages);
});

app.get("/company_softwares", async (req, res) => {
  const companySoftwares = await getCompanySoftwares();
  res.send(companySoftwares);
});

app.get("/student_languages", async (req, res) => {
  const studentLanguages = await getStudentLanguages();
  res.send(studentLanguages);
});

app.get("/student_softwares", async (req, res) => {
  const studentSoftwares = await getStudentSoftwares();
  res.send(studentSoftwares);
});

app.get("/cards", async (req, res) => {
  const cards = await getCards();
  res.send(cards);
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

//validate email and password
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

//login function that compares the input to user email and their hashed password
app.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const [students] = await getStudentCredentials(email);
    const student = students[0];

    if (!student) {
      return res.status(400).send({ message: "User not found" });
    }
    console.log(student.password);
    console.log(password);

    const passwordMatch = await bcrypt.compare(password, student.password);
    if (!passwordMatch) {
      return res.status(400).send({ message: "Wrong password" });
    }

    //add verification with jwt

    res.send({ message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Server error" });
  }
});
