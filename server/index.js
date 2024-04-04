import express from "express";
import cors from "cors";
import { port } from "./config.js";
import bcrypt from "bcryptjs";
import he from "he";
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

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
} from "./configs/database.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());

//obs! Remember to change origin to the frontend url when deploying
app.use(cors(
  {origin: ["http://localhost:5173"], methods: ["POST", "GET"], credentials: true }));

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

  //temporary max length for text field is 250 characters
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
      const payload = {id: student.id};
      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '15m'});
      res.cookie('token', token);
      return res.json({status: "success"});
     } else {
       return res.status(400).send({ message: "Wrong password" });
     }
     } else {
       return res.status(400).send({ message: "User not found" });
     }
  } catch (error) {
     console.error(error);
     res.status(500).send({ message: "Server error" });
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
}
 app.get("/verifyUser", verifyUser, async (req, res) => {
  return res.json({status: "success", id: req.id})
 });


 //get information form the verified user
 app.post("/getUserInformation", async (req, res) => {
  try {const id = req.body.user;
  console.log(id)
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

  //logout and clear the cookie
 app.get("/logout", (req, res) => {
  try {
  res.clearCookie('token');
  res.json({ message: "success" }); 
  } catch (error) {
  console.error(error);
  }
 });
 