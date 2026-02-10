# Bajaj Finserv Health Challenge - Backend API

**Official Email**: navridhi2080.be23@chitkara.edu.in  
**GitHub**: [navridhi1026/bajaj-bfhl-backend](https://github.com/navridhi1026/bajaj-bfhl-backend)  
**Live URL**: https://bajaj-bfhl-backend.onrender.com

---

## 🚀 API Endpoints

### 1. **GET** `/health`
Health check endpoint to verify server status.

**Response:**
```json
{
  "is_success": true,
  "official_email": "navridhi2080.be23@chitkara.edu.in"
}
```

### 2. **POST** `/bfhl`
Main endpoint supporting 5 operations: `fibonacci`, `prime`, `lcm`, `hcf`, `AI`

**Request Format**: Send exactly **ONE** key in the request body.

---

## 📋 Supported Operations

### **1. Fibonacci Series**
Generate fibonacci series up to n terms.

**Request:**
```bash
curl -X POST https://bajaj-bfhl-backend.onrender.com/bfhl \
  -H "Content-Type: application/json" \
  -d '{"fibonacci": 10}'
```

**Response:**
```json
{
  "is_success": true,
  "official_email": "navridhi2080.be23@chitkara.edu.in",
  "data": [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
}
```

---

### **2. Prime Number Filter**
Filter prime numbers from an array.

**Request:**
```bash
curl -X POST https://bajaj-bfhl-backend.onrender.com/bfhl \
  -H "Content-Type: application/json" \
  -d '{"prime": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}'
```

**Response:**
```json
{
  "is_success": true,
  "official_email": "navridhi2080.be23@chitkara.edu.in",
  "data": [2, 3, 5, 7]
}
```

---

### **3. LCM Calculation**
Calculate Least Common Multiple of numbers.

**Request:**
```bash
curl -X POST https://bajaj-bfhl-backend.onrender.com/bfhl \
  -H "Content-Type: application/json" \
  -d '{"lcm": [12, 15, 20]}'
```

**Response:**
```json
{
  "is_success": true,
  "official_email": "navridhi2080.be23@chitkara.edu.in",
  "data": 60
}
```

---

### **4. HCF Calculation**
Calculate Highest Common Factor (GCD) of numbers.

**Request:**
```bash
curl -X POST https://bajaj-bfhl-backend.onrender.com/bfhl \
  -H "Content-Type: application/json" \
  -d '{"hcf": [24, 36, 48]}'
```

**Response:**
```json
{
  "is_success": true,
  "official_email": "navridhi2080.be23@chitkara.edu.in",
  "data": 12
}
```

---

### **5. AI Question Answering**
Answer questions using Google Gemini AI (single-word response).

**Request:**
```bash
curl -X POST https://bajaj-bfhl-backend.onrender.com/bfhl \
  -H "Content-Type: application/json" \
  -d '{"AI": "What is the capital of France?"}'
```

**Response:**
```json
{
  "is_success": true,
  "official_email": "navridhi2080.be23@chitkara.edu.in",
  "data": "Paris"
}
```

---

## 🛠️ Tech Stack

- **Runtime**: Node.js (ES Modules)
- **Framework**: Express.js
- **AI Integration**: Google Gemini 2.0 Flash
- **Deployment**: Render (Free Tier)
- **Version Control**: Git + GitHub

---

## 🚀 Local Development

```bash
# Clone repository
git clone https://github.com/navridhi1026/bajaj-bfhl-backend.git
cd bajaj-bfhl-backend

# Install dependencies
npm install

# Start server
npm start

# Server runs on http://localhost:5000
```

---

## 📧 Contact

**Email**: navridhi2080.be23@chitkara.edu.in  
**GitHub**: [@navridhi1026](https://github.com/navridhi1026)

---

**Assessment Project for Bajaj Finserv**  
*Built with ❤️ using Node.js, Express & Google Gemini AI*
