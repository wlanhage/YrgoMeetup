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

// Add this function to your database.js file
export async function getStudentById(id) {
  try {
    const [rows] = await pool.query("SELECT * FROM students WHERE id = ?", [
      id,
    ]);
    return rows[0]; // Assuming the query returns at least one row
  } catch (error) {
    console.error("Error fetching student by ID:", error);
    throw error;
  }
}

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
      `INSERT INTO companys (companyName, website, firstname, lastname, email)
      VALUES (?, ?, ?, ?, ?)`,

      [companyName, website, firstname, lastname, email]
    );
    return result;
  } catch (error) {
    console.error("Error creating company:", error);
    throw error;
  }
}

export async function updateCompanyDescription(
  id,
  description,
  services,
  intern
) {
  try {
    const result = await pool.query(
      `UPDATE companys SET description = ?, services = ?, intern = ? WHERE id = ?`,
      [description, services, intern, id]
    );
    return result;
  } catch (error) {
    console.error("Error updating company description:", error);
    throw error;
  }
}

export async function updateCompanyCardDesign(id, cardColor, icon, pattern) {
  try {
    const result = await pool.query(
      `UPDATE companys SET cardColor = ?, icon = ?, pattern = ? WHERE id = ?`,
      [cardColor, icon, pattern, id]
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

export async function getStudentSkills(id) {
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

export async function getStudentLanguagesFromId(studentId) {
  try {
    const [result] = await pool.query(`
      SELECT s.id, s.firstname, s.lastname, s.email, s.linkedin, l.name AS language
      FROM students s
      LEFT JOIN student_languages sl ON s.id = sl.student_id
      LEFT JOIN languages l ON sl.language_id = l.id
      WHERE s.id = ?
    `, [studentId]);

    // Grouping languages for each student
    const studentInfo = {
      id: result[0].id,
      firstname: result[0].firstname,
      lastname: result[0].lastname,
      email: result[0].email,
      linkedin: result[0].linkedin,
      languages: result.map(row => row.language).filter(language => language !== null)
    };

    return studentInfo;
  } catch (error) {
    console.error('Error fetching student info with languages:', error);
    throw error;
  }
}

export async function updateStudent(linkedin, portfolio, id) {
  try {
    const result = await pool.query(
      `UPDATE students SET linkedin = ?, portfolio = ? WHERE id = ?`,
      [linkedin, portfolio, id]
    );
    return result;
  } catch (error) {
    console.error("Error updating student:", error);
    throw error;
  }
}

export async function insertStudentLanguage(studentId, languageId) {
  try {
    const result = await pool.query(
      `INSERT INTO student_languages (student_id, language_id) VALUES (?, ?)`,
      [studentId, languageId]
    );
    return result;
  } catch (error) {
    console.error("Error inserting student language:", error);
    throw error;
  }
}

export async function getLatestStudentId() {
  const query = "SELECT id FROM students ORDER BY id DESC LIMIT 1";
  const [rows] = await pool.query(query);
  return rows;
}

export async function getStudentId(email) {
  const query = `SELECT id FROM students WHERE email = ?`;
  const [rows] = await pool.query(query, [email]);
  return rows[0];
}