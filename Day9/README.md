# MongoDB Connection with Express.js 🚀

✅ This project demonstrates how to set up a **basic Express.js server** and connect it with **MongoDB** using the official `mongodb` driver.  

---

## 📂 Project Overview
- Connects to a local MongoDB instance (`mongodb://127.0.0.1:27017`)  
- Uses a database named **resumeData**  
- Provides a `/api/status` endpoint to check the connection status  
- Includes error handling for failed connections  

---

## ⚡ Tech Stack
- **Node.js**  
- **Express.js**  
- **MongoDB (Official Driver)**  

---

## ▶️ How to Run

1. **Clone the repository**
   ```bash
   git clone <https://github.com/ShreshthManu/45-Days-Challenge.git>
   cd <Day9>

2. **Install Dependencies**
    ``` bash
    npm install express mongodb

3. **Start MongoDB locally**
    ```bash
    mongod

4. **Run the server**
    ```bash
    node index.js

5. **Test the connection**
    Open in your browser or Postman
    ```bash
    http://localhost:3000/api/status

6. **Example response:**
    ```JSON
  {
    "message": "MongoDB connection successful!",
    "database": "resumeData",
    "status": "connected",
    "timestamp": "2025-09-28T17:40:15.123Z"
   }
