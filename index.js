import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// User details (Replace with your actual details)
const USER_INFO = {
  user_id: "kunal_anand_10022003",  // Format: fullname_ddmmyyyy
  email: "kunal.anand2021@vitstudent.ac.in",
  roll_number: "21BCE0001"
};

// GET /health - Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// POST /bfhl - Main logic endpoint
app.post('/bfhl', (req, res) => {
  try {
    const { data } = req.body;

    // Validate input
    if (!data || !Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        message: 'Invalid input: data should be an array'
      });
    }

    // Process data
    const numbers = [];
    const alphabets = [];
    let highestLowercase = null;

    data.forEach(item => {
      // Check if it's a number
      if (!isNaN(item) && item.trim() !== '') {
        numbers.push(item);
      }
      // Check if it's an alphabet
      else if (/^[a-zA-Z]$/.test(item)) {
        alphabets.push(item);
        
        // Track highest lowercase alphabet
        if (item === item.toLowerCase()) {
          if (!highestLowercase || item > highestLowercase) {
            highestLowercase = item;
          }
        }
      }
    });

    // Response
    res.status(200).json({
      is_success: true,
      user_id: USER_INFO.user_id,
      email: USER_INFO.email,
      roll_number: USER_INFO.roll_number,
      numbers: numbers,
      alphabets: alphabets,
      highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : []
    });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      is_success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    message: 'Route not found',
    available_routes: [
      'GET /health',
      'POST /bfhl'
    ]
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 Health check: http://localhost:${PORT}/health`);
  console.log(`📍 BFHL API: http://localhost:${PORT}/bfhl`);
});

export default app;
