# BFHL Backend Assessment - Bajaj

Simple REST API backend with AI integration for Bajaj company assessment.

## 🚀 Features

- ✅ RESTful API endpoints
- ✅ Data processing (numbers/alphabets separation)
- ✅ Highest lowercase alphabet detection
- ✅ **Google Gemini AI integration**
- ✅ CORS enabled
- ✅ Production ready
- ✅ Easy deployment

## 📋 API Endpoints

### 1. Health Check
```
GET /health
```
**Response:**
```json
{
  "status": "OK",
  "message": "Server is running",
  "timestamp": "2026-02-10T10:30:00.000Z"
}
```

### 2. BFHL Data Processing
```
POST /bfhl
```
**Request Body:**
```json
{
  "data": ["A", "C", "z", "1", "5", "9"]
}
```

**Response:**
```json
{
  "is_success": true,
  "user_id": "kunal_anand_10022003",
  "email": "kunal.anand2021@vitstudent.ac.in",
  "roll_number": "21BCE0001",
  "numbers": ["1", "5", "9"],
  "alphabets": ["A", "C", "z"],
  "highest_lowercase_alphabet": ["z"]
}
```

## 🚀 Local Setup

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```

3. **Start production server:**
```bash
npm start
```

Server will run on `http://localhost:5000`

## 🧪 Testing

### Using cURL

**Health Check:**
```bash
curl http://localhost:5000/health
```

**BFHL API:**
```bash
curl -X POST http://localhost:5000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["M", "1", "334", "4", "B", "Z", "a"]}'
```

### Using Postman

1. Import the `postman_collection.json` file
2. Test both endpoints
3. Verify responses

## 📦 Deployment

### Deploy to Render

1. Push code to GitHub
2. Go to [render.com](https://render.com)
3. Create new Web Service
4. Connect your repository
5. Build Command: `npm install`
6. Start Command: `npm start`
7. Deploy!

### Deploy to Railway

1. Push code to GitHub
2. Go to [railway.app](https://railway.app)
3. New Project → Deploy from GitHub
4. Select repository
5. Deploy automatically

## 📁 Project Structure

```
bajaj-bfhl-backend/
├── index.js              # Main server file
├── package.json          # Dependencies
├── .env                  # Environment variables
├── .gitignore           # Git ignore rules
├── README.md            # Documentation
└── postman_collection.json  # API testing collection
```

## ✅ Features

- ✅ Health check endpoint
- ✅ Data processing (numbers, alphabets separation)
- ✅ Highest lowercase alphabet detection
- ✅ Proper error handling
- ✅ CORS enabled
- ✅ Production ready
- ✅ Easy deployment

## 👤 Developer Info

- **Name:** Kunal Anand
- **Email:** kunal.anand2021@vitstudent.ac.in
- **Roll Number:** 21BCE0001

## 📝 Notes

- Update `USER_INFO` in `index.js` with your actual details
- Server runs on port 5000 by default
- All responses are in JSON format
- CORS is enabled for all origins
