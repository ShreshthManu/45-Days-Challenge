# Day 8 – Express.js Portfolio API  

✅ **Day 8 Completed – Express.js Portfolio API!**  

As part of the **#45DaysChallenge** guided by *Aldrin Menon* I built an Express.js API to serve **projects** and **work experience** data.  

---

## 🚀 What I Built / Did:  
- Created a `/api/projects` route to fetch all projects  
- Added `/api/experience` route to return work experiences  
- Implemented `/api/projects/:id` to fetch project details by ID  

---

## 📚 What I Learned:  
- Structuring multiple API endpoints in Express.js  
- Handling dynamic routes with `req.params`  
- Returning proper JSON responses with success/error states  

---

## ▶️ Run the Project  

1. Install dependencies:  
   ```bash
   npm install express

2. Run the Server
    ```bash
    node index.js

3. Test Endpoints
    ```bash
    Root:        http://localhost:3000/  
    API:         http://localhost:3000/api  
    Projects:    http://localhost:3000/api/projects  
    Experience:  http://localhost:3000/api/experience  
    Single Proj: http://localhost:3000/api/projects/1  
