import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

export async function getStudents() {
  const result = await pool.query("SELECT * from students");
  return result;
}

export async function getCompanys() {
  const result = await pool.query("SELECT * from companys");
  return result;
}

export async function createCompany(
  company,
  email,
  phone,
  linkedin,
  textfield,
  web,
  design
) {
  const result = await pool.query(
    `INSERT INTO companys (company, email, phone, linkedin, textfield, web, design)
  VALUES (? , ? , ?, ?, ?, ?, ?)`,
    [company, email, phone, linkedin, textfield, web || false, design || false]
  );
  return result;
}

export async function createStudent(
  firstname,
  lastname,
  developer,
  designer,
  email,
  phone,
  linkedin,
  textfield,
  password
) {
  try {

    //make sure to change db so that the email of every entry is unique
  const result = await pool.query(
    `INSERT INTO students (firstname, lastname, developer, designer, email, phone, linkedin, textfield, password)
  VALUES (? , ? , ?, ?, ?, ?, ?, ?, ?)`,
    [
      firstname,
      lastname,
      developer || false,
      designer || false,
      email,
      phone,
      linkedin,
      textfield,
      password,
    ]
  );
  return result;
}
catch (error) {
  console.error("Error creating student:", error);
}
};


export async function getStudentCredentials(email){
  console.log(email);
  if (!email) {
    throw new Error('Email is required');
  }
  const result = await pool.query("SELECT * FROM students WHERE email = ?", [email]);
  return result;
}