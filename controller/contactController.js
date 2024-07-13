const contactModel = require("../model/contactModel");
const sendMail = require("../utils/email");
require('dotenv').config();


//Function to receive emails from potential clients
const receiveEmail = async (req, res) => {
    try {
      const { fullName, email, message } = req.body;
  
      if (!email || !message || !fullName) {
        return res.status(400).json({
          message: "Please fill in all fields!"
        });
      }
  
      // Save the message to the database
      const newMessage = new contactModel({
        fullName,
        email,
        message,
      });
  
      // Send email notification to admin
      const adminEmail = 'royskenth3@gmail.com';
      const title = 'Email from Client Via KROY Health, Inc';
      const emailBody = `You have received a new message from ${fullName} (${email}):\n\n${message}`;
  
      await sendMail({
        email: adminEmail,
        subject: title,
        text: emailBody,
      });
  
      await newMessage.save();
  
      return res.status(200).json({
        message: 'Message sent successfully'
      });
  
    } catch (error) {
      return res.status(500).json({
        Error: "Internal Server Error: " + error.message,
      });
    }
  }
  

module.exports = {
    receiveEmail,

}