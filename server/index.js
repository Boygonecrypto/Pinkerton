import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
import { sendContactEmail } from "./emailService.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Security middleware
app.use(helmet());
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? [
            "https://your-domain.com",
            "https://same-jmzlfgl0003-latest.netlify.app",
          ]
        : ["http://localhost:5173", "http://127.0.0.1:5173"],
  })
);

// Rate limiting - prevent spam
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: {
    error: "Too many contact form submissions. Please try again in 15 minutes.",
  },
});

// Body parsing middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Pinkerton Construction API is running",
    timestamp: new Date().toISOString(),
  });
});

// Contact form submission endpoint
app.post("/api/contact", limiter, async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message, projectType } =
      req.body;

    // Validation
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({
        success: false,
        error:
          "Missing required fields: firstName, lastName, email, and message are required.",
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: "Please provide a valid email address.",
      });
    }

    // Prepare email data
    const contactData = {
      firstName,
      lastName,
      email,
      phone: phone || "Not provided",
      message,
      projectType: projectType || "General Inquiry",
      submittedAt: new Date().toISOString(),
    };

    // Send email
    const emailResult = await sendContactEmail(contactData);

    if (emailResult.success) {
      res.status(200).json({
        success: true,
        message:
          "Thank you for contacting Pinkerton Construction! We will get back to you within 24 hours.",
      });
    } else {
      throw new Error(emailResult.error);
    }
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({
      success: false,
      error:
        "Sorry, there was an error sending your message. Please try again or call us directly at (555) 123-4567.",
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({
    success: false,
    error: "Internal server error. Please try again later.",
  });
});

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    error: "API endpoint not found",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Pinkerton Construction API Server running on port ${PORT}`);
  console.log(`🌍 Health check: http://localhost:${PORT}/api/health`);
  console.log(`📧 Contact endpoint: http://localhost:${PORT}/api/contact`);
});

export default app;
