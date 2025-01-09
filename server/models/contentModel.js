// models/user.js
import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

// Define a User model for the 'users' table
const Content = sequelize.define(
  "Content",
  {
    // Fields (columns in the users table)
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    file: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Additional options
    tableName: "contents",
    timestamps: true, // Adds createdAt and updatedAt
  }
);

// Sync the model with the database only in development
if (process.env.NODE_ENV !== "production") {
    Content.sync()
    .then(() => console.log("User model synced with the database."))
    .catch((err) => console.log("Error syncing User model:", err));
}

export default Content;
