# Projects API with Express.js & MongoDB 🚀

✅ A simple REST API built with **Node.js**, **Express.js**, and **MongoDB** to manage project data.  
This API allows you to **create, read, update, and delete** projects from a MongoDB database.

---

## 📂 Features
- **POST /api/projects** → Add a new project  
- **GET /api/projects** → Retrieve all projects  
- **PUT /api/projects/:id** → Update a project by ID  
- **DELETE /api/projects/:id** → Delete a project by ID  
- Input validation (`title` & `description` required)  
- Auto-generated `createdAt` and `updatedAt` timestamps  
- MongoDB `_id` returned for inserted documents  

---

## ⚡ Tech Stack
- **Node.js**  
- **Express.js**  
- **MongoDB (Official Driver)**  

---

## ▶️ Getting Started

1. **Clone the repository**
   ```bash
   git clone <https://github.com/ShreshthManu/45-Days-Challenge.git>
   cd <Day11>

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
## Create a project
curl -X POST http://localhost:3000/api/projects<br>
-H "Content-Type: application/json"<br>
-d '{"title":"Test","description":"Test project"}'<br>

$
### Get the project ID from response, then update
curl -X PUT http://localhost:3000/api/projects/PROJECT_ID<br>
-H "Content-Type: application/json"<br>
-d '{"title":"Updated Test","description":"Updated description"}'<br>

$
## Delete the project
curl -X DELETE http://localhost:3000/api/projects/PROJECT_ID<br>

$
### Try to update/delete non-existent project (should return 404)
curl -X PUT http://localhost:3000/api/projects/507f1f77bcf86cd799439011<br>
-H "Content-Type: application/json"<br>
-d '{"title":"Should fail"}'<br>