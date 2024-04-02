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

  // password should contain at least one number, one lowercase and uppercase letter, min. 8 characters
  const validatePassword = (password) => {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    return re.test(password);
  };
  // email should be in the correct format
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S{2,3}$/;
    return re.test(email);
  };
  const validateFirstName = (firstname) => {
    const re = /^[a-zA-Z]+$/;
    return re.test(firstname);
  };
  const validateLastName = (lastname) => {
    const re = /^[a-zA-Z]+$/;
    return re.test(lastname);
  };
  // validate textfields
  if (
    !firstname ||
    typeof firstname !== "string" ||
    !validateFirstName(firstname) ||
    !/^[a-zA-Z]+$/.test(firstname)
  ) {
    res.status(400).send("Invalid first name");
    return;
  }
  if (
    !lastname ||
    typeof lastname !== "string" ||
    !validateLastName(lastname) ||
    !/^[a-zA-Z]+$/.test(lastname)
  ) {
    res.status(400).send("Invalid last name");
    return;
  }

  //temporary max lenght for text field is 250 characters
  if (typeof textfield !== "string" || textfield.length > 250) {
    res.status(400).send("Invalid last name");
    return;
  }

  if (!email || typeof email !== "string" || !validateEmail(email)) {
    res.status(400).send("Invalid email");
    return;
  }
  if (
    typeof phone !== "string" ||
    (phone.length !== 0 && phone.length !== 10) ||
    !phone.startsWith("07")
  ) {
    res.status(400).send("Invalid phone number");
    return;
  }
  if (typeof linkedin !== "string") {
    res.status(400).send("Invalid linkedin-url");
  }
  if (typeof developer !== "boolean" || typeof designer !== "boolean") {
    res.status(400).send("Invalid developer or designer");
  }

  if (
    !password ||
    typeof password !== "string" ||
    !validatePassword(password)
  ) {
    res.status(400).send("Invalid password");
    return;
  }

  const encodedFirstname = he.encode(firstname);
  const encodedLastname = he.encode(lastname);
  const encodedTextfield = he.encode(textfield);
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  const createdStudent = await createStudent(
    encodedFirstname,
    encodedLastname,
    developer,
    designer,
    email,
    phone,
    linkedin,
    encodedTextfield,
    hashedPassword
  );
});

app.listen(port, () => {
  console.log(`App is listening to port ${port}`);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
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
