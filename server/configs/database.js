import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

// standard mysql connection
// const pool = mysql
//   .createPool({
//     host: "127.0.0.1",
//     user: "root",
//     password: "",
//     database: "yrgoeventDB",
//   })
//   .promise();

const pool = mysql
  .createPool({
    host: "db-mysql-lon1-26103-do-user-16098185-0.c.db.ondigitalocean.com",
    user: "doadmin",
    password: "AVNS_QjIchW2TZrOVugX4VOQ",
    database: "defaultdb",
    port: 25060,
    ssl: { rejectUnauthorized: false }, // this is required if the sslmode is REQUIRED
  })
  .promise();

// connection using .env
// const pool = mysql
//   .createPool({
//     host: process.env.MYSQL_HOST,
//     user: process.env.MYSQL_USER,
//     password: process.env.MYSQL_PASSWORD,
//     database: process.env.MYSQL_DATABASE,
//   })
//   .promise();

export async function getStudents() {
  const [rows] = await pool.query("SELECT * from students");
  return rows;
}

export async function getVisitors() {
  const [rows] = await pool.query("SELECT * from visitors");
  return rows;
}

export async function getUsers() {
  const result = await pool.query(`
  SELECT name
  FROM users
  `);
  return result;
}

export async function getStudent() {
  const [rows] = await pool.query(`
  SELECT *
  FROM students
  WHERE students.name = 'John Doe'
  `);
  return rows[0];
}

export async function createStudent(area, name, company) {
  const result = await pool.query(
    `INSERT INTO visitors (area, name, company)
  VALUES (? , ? , ?)`,
    [area, name, company],
  );
  return result;
}
