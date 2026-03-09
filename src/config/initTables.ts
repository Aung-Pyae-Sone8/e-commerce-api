import pool from "../config/db.js";

export async function initTables() {
//   await pool.query(`
//     CREATE TABLE IF NOT EXISTS users (
//       id INT AUTO_INCREMENT PRIMARY KEY,
//       email VARCHAR(255) UNIQUE NOT NULL,
//       password VARCHAR(255) NOT NULL,
//       name VARCHAR(255),
//       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//     )
//   `);

  await pool.query(`
  CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    price DOUBLE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  )
`);

  console.log("Tables initialized ✅");
}