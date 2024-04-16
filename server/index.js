import express from "express";
import cors from "cors";
import { port } from "./config.js";
import bcrypt from "bcryptjs";
import he from "he";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import axios from "axios";

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
  updateCompanyDescription,
  updateCompanyCardDesign,
  updateStudent,
  getLatestStudentId,
  insertStudentLanguage,
} from "./configs/database.js";

const app = express();

import dotenv from "dotenv";
dotenv.config();

app.use(express.json());

//obs! Remember to change origin to the frontend url when deploying on netlify

app.use(
  cors({
    origin: ["http://localhost:5173", "https://yrgomeetup.onrender.com"],
    methods: ["GET", "POST", "PUT", "OPTIONS"],
    credentials: true,
    allowedHeaders: ["Origin", "Content-Type", "Accept", "Authorization"],
  })
);
app.options("*", cors());
app.use(cookieParser());
app.use(express.static("public"));
axios.defaults.withCredentials = true;

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

app.get("/students/latest", async (req, res) => {
  const latestStudent = await getLatestStudentId();
  res.send(latestStudent);
});

router.get('/getStudentLanguagesFromId/:studentId', async (req, res) => {
  try {
      const studentId = req.params.studentId;
      const languages = await getStudentLanguagesFromId(studentId);
      res.json(languages);
  } catch (error) {
      console.error('Error fetching student languages:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
});

app.post("/companys", async (req, res) => {
  const { companyName, website, firstname, lastname, email } = req.body;
  const createdCompany = await createCompany(
    companyName,
    website,
    firstname,
    lastname,
    email
  );
  res.json(createdCompany);
});

app.put("/companys/:id/description", async (req, res) => {
  const { description, services, intern } = req.body;
  const { id } = req.params;
  const updatedCompany = await updateCompanyDescription(
    id,
    description,
    services,
    intern
  );
  res.json(updatedCompany);
});

app.put("/companys/:id/design", async (req, res) => {
  const { cardColor, icon, pattern } = req.body;
  const { id } = req.params;
  const updatedCompany = await updateCompanyCardDesign(
    id,
    cardColor,
    icon,
    pattern
  );
  res.json(updatedCompany);
});

app.put("/students", async (req, res) => {
  const { linkedin, portfolio } = req.body;

  try {
    // Fetch the ID of the most recent student
    const id = await getLatestStudentId();

    const updateResult = await updateStudent(linkedin, portfolio, id);
    res.json(updateResult);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

app.put("/students/:id", async (req, res) => {
  const { linkedin, portfolio } = req.body;
  const { id } = req.params;

  try {
    const updateResult = await updateStudent(linkedin, portfolio, id);
    if (updateResult.affectedRows > 0) {
      res.json({ message: "Student updated successfully" });
    } else {
      res.status(404).send("Student not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

app.post("/student_languages", async (req, res) => {
  const { student_id, language_id } = req.body;

  try {
    // Insert the student's language
    const insertLanguage = await insertStudentLanguage(student_id, language_id);
    res.json(insertLanguage);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

//validate email and password
app.post("/students", async (req, res) => {
  let encodedFirstname;
  let encodedLastname;
  let hashedPassword;
  const {
    firstname,
    lastname,
    email,
    password,
    designer,
    developer,
    linkedin,
    portfolio,
    textfield,
  } = req.body;

  const mysqlDesigner = designer ? 1 : 0;
  const mysqlDeveloper = developer ? 1 : 0;

  //validate the password
  const validatePassword = (password) => {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    return re.test(password);
  };

  // email should be in the correct format

  const validateEmail = (email) => {
    const re = /\S+@\S+.\S{2,3}$/;
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
  } else {
    encodedFirstname = he.encode(firstname);
  }
  if (
    !lastname ||
    typeof lastname !== "string" ||
    !validateLastName(lastname) ||
    !/^[a-zA-Z]+$/.test(lastname)
  ) {
    res.status(400).send("Invalid last name");
    return;
  } else {
    encodedLastname = he.encode(lastname);
  }

  //validate email
  if (!email || typeof email !== "string" || !validateEmail(email)) {
    res.status(400).send("Invalid email");
    return;
  }
  //validate linkedin
  if (typeof linkedin !== "string") {
    res.status(400).send("Invalid linkedin-url");
  }

  //validate developer and designer
  if (typeof developer !== "boolean" || typeof designer !== "boolean") {
    res.status(400).send("Invalid developer or designer");
  }

  //validate password
  if (
    !password ||
    typeof password !== "string" ||
    !validatePassword(password)
  ) {
    res.status(400).send("Invalid password");
    return;
  } else {
    const salt = await bcrypt.genSalt(10);
    hashedPassword = await bcrypt.hash(password, salt);
  }
  try {
    const createdStudent = await createStudent(
      encodedFirstname,
      encodedLastname,
      email,
      hashedPassword,
      mysqlDesigner,
      mysqlDeveloper,
      linkedin,
      portfolio,
      textfield
    );
    res
      .status(201)
      .json({ message: "student created", student: createdStudent });
  } catch (error) {
    console.error("error creating student:", error);
    res.status(500).json({ message: "Error creating student" });
  }
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

        /*         let expiryDate = new Date();
expiryDate.setMinutes(expiryDate.getMinutes() + 20);
       res.cookie('token', token, { expires:expiryDate}); */
        // expires in 24 hours
        return res.json({ status: "success", token: token });
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

//make sure there is a token and request the user credentials by decrypting the token
const verifyUser = (req, res, next) => {
  console.log("trying to verify user...");
  const authHeader = req.headers.authorization;
  console.log(authHeader);
  if (!authHeader) {
    console.log("there is no token.");
    return res.json({ message: "There is no token. Please provide one." });
  } else {
    const token = authHeader.split(" ")[1];
    console.log("there is a token");
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        console.log("Token not valid", token);
        return res.json({ message: "Web token not valid", token: token });
      } else {
        console.log("token is valid");
        req.id = decoded.id;
        console.log(req.id);
        next();
      }
    });
  }
};
app.get("/verifyUser", verifyUser, async (req, res) => {
  return res.json({ status: "success", id: req.id });
});

// Add this import at the top of your index.js file
import { getStudentById } from "./configs/database.js";

// Add this route handler to your index.js file
app.get("/students/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const student = await getStudentById(id);
    if (student) {
      res.json(student);
    } else {
      res.status(404).send("Student not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

//get information from the verified user
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

//logout
app.get("/logout", (req, res) => {
  try {
    res.json({ message: "success" });
  } catch (error) {
    console.error(error);
  }
});
