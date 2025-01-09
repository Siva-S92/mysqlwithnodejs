// config/database.js

import { Sequelize } from "sequelize";
import dotenv from 'dotenv'

dotenv.config()

// Create an instance of Sequelize to connect to the MySQL database
const sequelize = new Sequelize(
  process.env.MYSQL_URI,  // Database URL with credentials
  {
    dialect: "mysql",  // MySQL dialect
    logging: false,    // Disable logging (set to true if you want SQL queries logged)
  }
);

// Function to establish a connection to the database
const connectMysqlDB = async () => {
  try {
    await sequelize.authenticate();  // Authenticate the connection
    console.log("Database connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database. Error details:", error.message);
    process.exit(1);  // Exit the process if the database connection fails
  }
};

// Export sequelize instance and the connection function for use in other files
export { sequelize, connectMysqlDB };
