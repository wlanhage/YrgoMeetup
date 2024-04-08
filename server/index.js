import express from "express";
import cors from "cors";
import { port } from "./config.js";
import bcrypt from "bcryptjs";
import he from "he";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

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
  getUserInformation,
  getUserSkills,
  getCards,
} from "./configs/database.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());

//obs! Remember to change origin to the frontend url when deploying
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

app.use(cookieParser());
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

app.listen(port, () => {
  console.log(`App is listening to port ${port}`);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

//login function that compares the input to user email and their hashed password and creates a jwt

app.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const [students] = await getStudentCredentials(email);
    if (students.length > 0) {
      const student = students[0];
      const passwordMatch = await bcrypt.compare(password, student.password);
      //send student id with and use it to create a jwt
      if (passwordMatch) {
        const payload = { id: student.id };
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "20m",
        });
        res.cookie("token", token);
        return res.json({ status: "success" });
      } else {
        return res.status(400).send({ message: "Wrong password" });
      }
    } else {
      return res.status(400).send({ message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error });
  }
});

//make sure there is a token and request the user credetials by decrypting the token
const verifyUser = (req, res, next) => {
  console.log("hello");
  const token = req.cookies.token;
  if (!token) {
    return res.json({ message: "There is no token. Please provide one." });
  } else {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.json({ message: "Web token not valid" });
      } else {
        req.id = decoded.id;
        console.log(req.id);
        // Send the response inside the jwt.verify callback
        next();
      }
    });
  }
};
app.get("/verifyUser", verifyUser, async (req, res) => {
  return res.json({ status: "success", id: req.id });
});

//get information form the verified user
app.post("/getUserInformation", async (req, res) => {
  try {
    const id = req.body.user;
    const [users] = await getUserInformation(id);
    if (users.length > 0) {
      const user = users[0];
      return res.json(user);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Server error" });
  }
});

//get the skills of the user

app.post("/getUserSkills", async (req, res) => {
  try {
    const id = req.body.user;
    let [softwares, languages] = await getUserSkills(id);
    console.log(softwares);
    console.log(languages);
    if (languages.length > 0 && softwares.length > 0) {
      return res.json({ languages, softwares });
    } else if (languages.length > 0 && !softwares.length > 0) {
      return res.json({ languages });
    } else if (!languages.length > 0 && softwares.length > 0) {
      return res.json({ softwares });
    } else {
      return res.status(400).send({ message: "No skills found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Server error" });
  }
});

//logout and clear the cookie
app.get("/logout", (req, res) => {
  try {
    res.clearCookie("token");
    res.json({ message: "success" });
  } catch (error) {
    console.error(error);
  }
});
