// models/user.js
import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

// Define a User model for the 'users' table
const User = sequelize.define(
  "User",
  {
    // Fields (columns in the users table)
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,  // Validate the email format
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6, 100],  // Validate password length
      },
    },
  },
  {
    // Additional options
    tableName: "users",
    timestamps: true, // Adds createdAt and updatedAt
  }
);

// Sync the model with the database only in development
if (process.env.NODE_ENV !== 'production') {
  User.sync()
    .then(() => console.log("User model synced with the database."))
    .catch((err) => console.log("Error syncing User model:", err));
}

export default User;
