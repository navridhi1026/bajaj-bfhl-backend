# 🚀 DEPLOYMENT GUIDE - Bajaj BFHL Backend

## Option 1: Deploy to Render (Recommended ⭐)

### Step-by-Step:

1. **Push to GitHub**
   ```bash
   cd bajaj-bfhl-backend
   git add .
   git commit -m "Initial commit - BFHL backend"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Create Render Account**
   - Go to https://render.com
   - Sign up with GitHub

3. **Deploy**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Configure:
     - **Name**: bajaj-bfhl-backend
     - **Environment**: Node
     - **Build Command**: `npm install`
     - **Start Command**: `node index.js`
     - **Plan**: Free
   - Click "Create Web Service"

4. **Get Your URL**
   - Copy the URL (e.g., `https://bajaj-bfhl-backend.onrender.com`)
   - Test: `https://your-url.onrender.com/health`

---

## Option 2: Deploy to Railway

### Step-by-Step:

1. **Push to GitHub** (same as above)

2. **Create Railway Account**
   - Go to https://railway.app
   - Sign up with GitHub

3. **Deploy**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository
   - Railway auto-detects and deploys

4. **Get Your URL**
   - Go to Settings → Generate Domain
   - Copy URL and test

---

## Option 3: Deploy to Vercel

### Step-by-Step:

1. **Create vercel.json**
   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "index.js",
         "use": "@vercel/node"
       }
     ],
     "routes": [
       {
         "src": "/(.*)",
         "dest": "index.js"
       }
     ]
   }
   ```

2. **Push to GitHub**

3. **Deploy**
   - Go to https://vercel.com
   - Import repository
   - Deploy

---

## ✅ After Deployment - Testing

Replace `<YOUR_DEPLOYED_URL>` with your actual URL:

### Test Health Check
```bash
curl https://<YOUR_DEPLOYED_URL>/health
```

### Test BFHL API
```bash
curl -X POST https://<YOUR_DEPLOYED_URL>/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["M", "1", "334", "4", "B", "Z", "a"]}'
```

---

## 📋 SUBMISSION CHECKLIST

✅ Backend code working locally
✅ Both APIs tested (GET /health, POST /bfhl)
✅ Code pushed to GitHub
✅ Deployed to cloud platform
✅ Public URL working
✅ Postman collection ready
✅ README documentation complete

---

## 🎯 What to Submit

1. **GitHub Repository URL**
2. **Deployed Public URL** (e.g., `https://bajaj-bfhl-backend.onrender.com`)
3. **Postman Collection** (attach `postman_collection.json`)
4. **Screenshots** of:
   - Health API response
   - BFHL API response
   - Deployment success

---

## 💡 Pro Tips

- ✅ Test both APIs before submission
- ✅ Make sure public URL is accessible
- ✅ Update USER_INFO in index.js with YOUR details
- ✅ Keep README updated
- ✅ Test with different input combinations
- ⚠️ Render free tier may sleep - first request takes 30s

---

## 🔥 Sample Submission Text

```
Bajaj BFHL Backend Assessment Submission

Student Details:
- Name: Kunal Anand
- Email: kunal.anand2021@vitstudent.ac.in
- Roll Number: 21BCE0001

Deployment:
- GitHub: https://github.com/yourusername/bajaj-bfhl-backend
- Live URL: https://bajaj-bfhl-backend.onrender.com

API Endpoints:
1. GET /health - Server health check
2. POST /bfhl - Data processing API

Tech Stack:
- Node.js + Express
- Deployed on Render

Testing:
- All APIs tested and working
- Postman collection attached
- Screenshots attached

Thank you!
```
