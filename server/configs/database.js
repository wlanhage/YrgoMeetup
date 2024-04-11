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
  companyName,
  website,
  firstname,
  lastname,
  email
) {
  try {
    const result = await pool.query(
      `INSERT INTO companys (company, email, phone, linkedin, textfield)
      VALUES (? , ? , ?, ?, ?, ?, ?)`,
      [companyName, website, firstname, lastname, email]
    );
    return result;
  } catch (error) {
    console.error("Error creating company:", error);
    throw error;
  }
}

export async function updateCompanyDescription(description, services, intern) {
  try {
    const result = await pool.query(
      `UPDATE companys SET description = ?, services = ?, intern = ?`,
      [description, services, intern]
    );
    return result;
  } catch (error) {
    console.error("Error updating company description:", error);
    throw error;
  }
}

export async function updateCompanyCardDesign(
  companyId,
  cardColor,
  icon,
  pattern
) {
  try {
    const result = await pool.query(
      `UPDATE companys SET cardColor = ?, icon = ?, pattern = ? WHERE id = ?`,
      [cardColor, icon, pattern, companyId]
    );
    return result;
  } catch (error) {
    console.error("Error updating company card design:", error);
    throw error;
  }
}

export async function createStudent(
  firstname,
  lastname,
  email,
  password,
  designer,
  developer,
  linkedin,
  portfolio,
  textfield
) {
  try {
    const studentResult = await pool.query(
      `INSERT INTO students (firstname, lastname, email, password, designer, developer, linkedin, portfolio, textfield)
  VALUES (? , ? , ?, ?, ?, ?, ?,?,?)`,
      [
        firstname,
        lastname,
        email,
        password,
        designer || false,
        developer || false,
        linkedin,
        portfolio,
        textfield,
      ]
    );
    return studentResult;
  } catch (error) {
    console.error("Error creating student:", error);
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
  const result = await pool.query(
    "SELECT * FROM students, student_languages, student_softwares WHERE id = ?",
    [id]
  );
  return result;
}

export async function getUserSkills(id) {
  console.log(`Fetching skills for user with ID: ${id}`);

  const [softwares] = await pool.query(
    `
    SELECT * 
    FROM softwares
    INNER JOIN student_softwares ON student_softwares.software_id = softwares.id  
    WHERE student_softwares.student_id = ?
  `,
    [id]
  );
  console.log(`Fetched softwares: ${JSON.stringify(softwares)}`);

  const [languages] = await pool.query(
    `
    SELECT * 
    FROM languages 
    INNER JOIN student_languages ON student_languages.language_id = languages.id 
    WHERE student_languages.student_id = ?
  `,
    [id]
  );
  console.log(`Fetched languages: ${JSON.stringify(languages)}`);

  return [softwares, languages];
}
