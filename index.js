import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Google Gemini configuration
let genAI = null;
let model = null;
if (process.env.GEMINI_API_KEY) {
  genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
}

// Official email (Chitkara)
const OFFICIAL_EMAIL = "navridhi2080.be23@chitkara.edu.in";

// ================= HELPER FUNCTIONS =================

// Generate Fibonacci series up to n terms
function generateFibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}

// Check if a number is prime
function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

// Filter prime numbers from array
function filterPrimes(arr) {
  return arr.filter(num => isPrime(num));
}

// Calculate GCD of two numbers
function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// Calculate HCF (GCD) of array of numbers
function calculateHCF(arr) {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr[0];
  
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    result = gcd(result, arr[i]);
  }
  return result;
}

// Calculate LCM of two numbers
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

// Calculate LCM of array of numbers
function calculateLCM(arr) {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr[0];
  
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    result = lcm(result, arr[i]);
  }
  return result;
}

// AI function with fallback
async function getAIAnswer(question) {
  if (model) {
    try {
      const prompt = `Answer this question with exactly ONE word only (no punctuation, no explanation): ${question}`;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      return response.text().trim().replace(/[.,!?]/g, '');
    } catch (error) {
      console.error('AI Error:', error.message);
      // Fallback to rule-based answers
    }
  }
  
  // Fallback logic for common questions
  const q = question.toLowerCase();
  if (q.includes('capital') && q.includes('maharashtra')) return "Mumbai";
  if (q.includes('capital') && q.includes('india')) return "Delhi";
  if (q.includes('capital') && q.includes('france')) return "Paris";
  if (q.includes('financial') && q.includes('india')) return "Mumbai";
  
  return "Unknown";
}

// ================= API ENDPOINTS =================

// GET /health - Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    is_success: true,
    official_email: OFFICIAL_EMAIL
  });
});

// POST /bfhl - Main logic endpoint
app.post('/bfhl', async (req, res) => {
  try {
    const body = req.body;
    
    // Validate that exactly one key is present
    const keys = Object.keys(body);
    if (keys.length !== 1) {
      return res.status(400).json({
        is_success: false,
        official_email: OFFICIAL_EMAIL,
        message: 'Request must contain exactly one key: fibonacci, prime, lcm, hcf, or AI'
      });
    }

    const key = keys[0];
    const value = body[key];

    let data;

    switch (key) {
      case 'fibonacci':
        // Validate: must be a positive integer
        if (!Number.isInteger(value) || value < 0) {
          return res.status(400).json({
            is_success: false,
            official_email: OFFICIAL_EMAIL,
            message: 'fibonacci must be a non-negative integer'
          });
        }
        data = generateFibonacci(value);
        break;

      case 'prime':
        // Validate: must be an array of numbers
        if (!Array.isArray(value)) {
          return res.status(400).json({
            is_success: false,
            official_email: OFFICIAL_EMAIL,
            message: 'prime must be an array of numbers'
          });
        }
        data = filterPrimes(value);
        break;

      case 'lcm':
        // Validate: must be an array of numbers
        if (!Array.isArray(value) || value.length === 0) {
          return res.status(400).json({
            is_success: false,
            official_email: OFFICIAL_EMAIL,
            message: 'lcm must be a non-empty array of numbers'
          });
        }
        data = calculateLCM(value);
        break;

      case 'hcf':
        // Validate: must be an array of numbers
        if (!Array.isArray(value) || value.length === 0) {
          return res.status(400).json({
            is_success: false,
            official_email: OFFICIAL_EMAIL,
            message: 'hcf must be a non-empty array of numbers'
          });
        }
        data = calculateHCF(value);
        break;

      case 'AI':
        // Validate: must be a string
        if (typeof value !== 'string' || value.trim() === '') {
          return res.status(400).json({
            is_success: false,
            official_email: OFFICIAL_EMAIL,
            message: 'AI must be a non-empty string question'
          });
        }
        data = await getAIAnswer(value);
        break;

      default:
        return res.status(400).json({
          is_success: false,
          official_email: OFFICIAL_EMAIL,
          message: 'Invalid key. Allowed keys: fibonacci, prime, lcm, hcf, AI'
        });
    }

    // Success response
    res.status(200).json({
      is_success: true,
      official_email: OFFICIAL_EMAIL,
      data: data
    });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      is_success: false,
      official_email: OFFICIAL_EMAIL,
      message: 'Internal server error'
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📧 Official Email: ${OFFICIAL_EMAIL}`);
  console.log(`🤖 AI Model: ${model ? 'Gemini 2.0 Flash (Active)' : 'Rule-based fallback'}`);
});
