import Content from "../models/contentModel.js";
import { sendEmail } from "../utils/sendEmail.js";

// Add a new user
export const createNewContent = async (req, res) => {
  const file = req.file.location;
  console.log(file)
  const { author, email, title, description } = req.body;

  try {
    const newContent = await Content.create({
      ...req.body,
      file: file
    });
    // sending email
    let to = email;
    let subject = title;
    let text = `Thank you ${author} for the posting your application as ${description}`
    await sendEmail(to, subject, text);
    
    res.status(201).json({
      success: true,
      message: "Created New Post Successfully",
      data: newContent,
    });
  } catch (error) {
    console.error("Error creating New Content:", error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};

export const getAllContents = async (req, res) => {
  try {
    const contents = await Content.findAll(); // Find all contents
    res.status(200).json({
      success: true,
      contents
    }); // Return as JSON
  } catch (error) {
    console.error("Error fetching contents:", error);
    res.status(500).json({ 
      success: false,
      message: "Internal Server Error"
     });
  }
}



export const updateContent = async(req, res) => {
  
  try {
    const result = await User.update(
      req.body, // Values to update
      {
        where: { id: req.body.id }, // Condition
      }
    );

    if (result[0] > 0) {
      console.log('Update successful');
    } else {
      console.log('No rows updated');
    }
  } catch (error) {
    console.error('Error updating user:', error);
  }
}


export const deleteContent = async(req, res) => {
  const { id } = req.body
  try {
    const result = await Content.destroy({
      where: { id }, // Condition
    });

    if (result > 0) {
      console.log('Deletion successful');
    } else {
      console.log('No rows deleted');
    }
  } catch (error) {
    console.error('Error deleting user:', error);
  }
}


export const uploadFile = async(req, res) => {
  try {
    res.json({
      message: 'File uploaded successfully!',
      fileUrl: req.file.location, // Location of the uploaded file in S3
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ message: 'Error uploading file', error });
  }

}
