import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const pool = mysql
  .createPool({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "yrgoeventDB",
  })
  .promise();

// const pool = mysql
//   .createPool({
//     host: process.env.MYSQL_HOST,
//     user: process.env.MYSQL_USER,
//     password: process.env.MYSQL_PASSWORD,
//     database: process.env.MYSQL_DATABASE,
//   })
//   .promise();

async function getStudents() {
  const [rows] = await pool.query("SELECT * from students");
  return rows;
}
const students = await getStudents();
console.log(students);

async function getStudent() {
  const [rows] = await pool.query(`
  SELECT *
  FROM students
  WHERE students.name = 'John Doe'
  `);
  return rows[0];
}

const john = await getStudent();
console.log(john);
