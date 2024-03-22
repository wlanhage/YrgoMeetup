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

// export async function getStudents() {
//   const [rows] = await pool.query("SELECT * from students");
//   return rows;
// }

// export async function getVisitors() {
//   const [rows] = await pool.query("SELECT * from visitors");
//   return rows;
// }

export async function getUsers() {
  const result = await pool.query(`
  SELECT *
  FROM users
  `);
  return result;
}

// export async function getStudent() {
//   const [rows] = await pool.query(`
//   SELECT *
//   FROM students
//   WHERE students.name = 'John Doe'
//   `);
//   return rows[0];
// }

// export async function createVisitor(area, name, company) {
//   const result = await pool.query(
//     `INSERT INTO visitors (area, name, company)
//   VALUES (? , ? , ?)`,
//     [area, name, company]
//   );
//   return result;
// }

// export async function createStudent(name, area) {
//   const result = await pool.query(
//     `INSERT INTO students (name, area,)
//   VALUES (? , ?)`,
//     [name, area]
//   );
//   return result;
// }
