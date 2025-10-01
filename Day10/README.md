# Projects API with Express.js & MongoDB 🚀

✅ A simple REST API built with **Node.js**, **Express.js**, and **MongoDB** to manage project data.  
This API allows you to **create** and **retrieve** projects from a MongoDB database.  

---

## 📂 Features
- **POST /api/projects** → Add a new project  
- **GET /api/projects** → Retrieve all projects  
- Input validation (title & description required)  
- Auto-generated `createdAt` and `updatedAt` timestamps  
- MongoDB `_id` returned for inserted documents  

---

## ⚡ Tech Stack
- **Node.js**  
- **Express.js**  
- **MongoDB (Official Driver)**  

---

## ▶️ Getting Started

### ▶️ How to Run

1. **Clone the repository**
   ```bash
   git clone <https://github.com/ShreshthManu/45-Days-Challenge.git>
   cd <Day10>

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
    http://localhost:3000/api/projects


# Testing Endpoints
 Open in your browser or Postman<br>
$
## Test GET (should return empty array)
curl http://localhost:3000/api/projects

$
## Create a project with POST
curl -X POST http://localhost:3000/api/projects<br>
-H "Content-Type: application/json"<br>
-d '{"title":"Test Project","description":"A test project"}'

$
## Test GET again (should return the created project)
curl http://localhost:3000/api/projects