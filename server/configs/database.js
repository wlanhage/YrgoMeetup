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

export async function getLanguages() {
  const result = await pool.query("SELECT * from languages");
  return result;
}

export async function getCompanyLanguages() {
  const result = await pool.query("SELECT * from company_languages");
  return result;
}

export async function getCompanySoftwares() {
  const result = await pool.query("SELECT * from company_softwares");
  return result;
}


export async function getStudentSoftwares() {
  const result = await pool.query("SELECT * from student_softwares");
  return result;
}

export async function getStudentLanguages() {
  const result = await pool.query("SELECT * from student_languages");
  return result;
}

export async function getCards() {
  const result = await pool.query("SELECT * from cards");
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
  try {
    const result = await pool.query(
      `INSERT INTO companys (company, email, phone, linkedin, textfield, web, design)
      VALUES (? , ? , ?, ?, ?, ?, ?)`,
      [
        company,
        email,
        phone,
        linkedin,
        textfield,
        web || false,
        design || false,
      ]
    );
    return result;
  } catch (error) {
    console.error("Error creating company:", error);
    throw error;
  }
}

async function createStudent(
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
    const studentResult = await pool.query(
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
    return studentResult;
  } catch (error) {
    console.error("Error creating student:", error);
    throw error; // Throw the error so it can be caught in the calling function
  }
}

export async function getStudentCredentials(email) {
  console.log(email);
  if (!email) {
    throw new Error("Email is required");
  }
  const result = await pool.query("SELECT * FROM students WHERE email = ?", [
    email,
  ]);
  return result;
}

export async function getUserInformation(id) {
  const result = await pool.query("SELECT * FROM students, student_languages, student_softwares WHERE id = ?", [id]);
  return result;
}

export async function getUserSkills(id) {
  console.log(`Fetching skills for user with ID: ${id}`);
  
  const [softwares] = await pool.query(`
    SELECT * 
    FROM softwares
    INNER JOIN student_softwares ON student_softwares.software_id = softwares.id  
    WHERE student_softwares.student_id = ?
  `, [id]);
  console.log(`Fetched softwares: ${JSON.stringify(softwares)}`);

  const [languages] = await pool.query(`
    SELECT * 
    FROM languages 
    INNER JOIN student_languages ON student_languages.language_id = languages.id 
    WHERE student_languages.student_id = ?
  `, [id]);
  console.log(`Fetched languages: ${JSON.stringify(languages)}`);

  return [softwares, languages];
}
