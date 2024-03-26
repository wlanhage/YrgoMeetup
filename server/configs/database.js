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

export async function createStudent(name, area) {
  const result = await pool.query(
    `INSERT INTO students (name, area,)
   VALUES (? , ?)`,
    [name, area]
  );
  return result;
}
