// controllers/userController.js

import User from "../models/userModel";

// Fetch all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll(); // Find all users
    res.status(200).json(users); // Return as JSON
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Fetch a user by ID
const getUserById = async (req, res) => {
  const { id } = req.params; // Get user ID from route params

  try {
    const user = await User.findByPk(id); // Find user by primary key (id)
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Add a new user
const createUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const newUser = await User.create({ username, email, password });
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(400).json({ message: "Bad Request" });
  }
};

export { getAllUsers, getUserById, createUser };
