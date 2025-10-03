# Blog & Task API with Express.js & MongoDB 📝🚀

✅ A simple REST API built with **Node.js**, **Express.js**, and **MongoDB** to manage **blog posts** and **tasks**.  
This API allows you to **create, read, update, delete, and manage completion** of tasks and blog posts in a MongoDB database.

---

## 📂 Features

### Blog Posts API
- **POST /api/posts** → Add a new blog post  
- **GET /api/posts** → Retrieve all blog posts  
- **GET /api/posts/:id** → Retrieve a single post by ID  
- **PUT /api/posts/:id** → Update a post by ID  
- **DELETE /api/posts/:id** → Delete a post by ID  
- Input validation (`title`, `content`, and `author` are required)  
- Auto-generated `createdAt` and `updatedAt` timestamps  

### Tasks API
- **POST /api/tasks** → Add a new task  
- **GET /api/tasks** → Retrieve all tasks (supports filters, pagination, and sorting)  
- **GET /api/tasks/:id** → Retrieve a single task by ID  
- **PUT /api/tasks/:id** → Update a task by ID  
- **PUT /api/tasks/:id/complete** → Mark a task as completed  
- **DELETE /api/tasks/:id** → Delete a task by ID  
- Input validation (`title` required, `priority` must be `high`, `medium`, or `low`)  
- Auto-generated `createdAt` and `updatedAt` timestamps  
- `completedAt` is automatically set when marking task as completed  

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
cd <Day12>

    ```

2.  **Install Dependencies**

    ``` bash
    npm install express mongodb
    ```

3.  **Start MongoDB locally**

    ``` bash
    mongod
    ```

4.  **Run the server**

    ``` bash
    node index.js
    ```

5.  **Test the connection**

    ``` bash
    http://localhost:3000/api/posts
    ```

------------------------------------------------------------------------

# 🧪 Testing Endpoints
## Blog Posts
### Create a Post

``` bash
curl -X POST http://localhost:3000/api/posts \
-H "Content-Type: application/json" \
-d '{"title":"My First Post","content":"Hello World!","author":"Shreshth","tags":["node","api"]}'
```

### Get All Posts

``` bash
curl http://localhost:3000/api/posts
```

### Get a Single Post by ID

``` bash
curl http://localhost:3000/api/posts/POST_ID
```

### Update a Post

``` bash
curl -X PUT http://localhost:3000/api/posts/POST_ID \
-H "Content-Type: application/json" \
-d '{"title":"Updated Post","content":"Updated Content","author":"Shreshth Manu"}'
```

### Delete a Post

``` bash
curl -X DELETE http://localhost:3000/api/posts/POST_ID
```

### Try to update/delete non-existent post (should return 404)

``` bash
curl -X PUT http://localhost:3000/api/posts/507f1f77bcf86cd799439011 \
-H "Content-Type: application/json" \
-d '{"title":"Should fail"}'
```

## Tasks

### Create a Task

``` bash
curl -X POST http://localhost:3000/api/tasks \
-H "Content-Type: application/json" \
-d '{"title":"Finish Node.js Project","description":"Complete all endpoints","priority":"high","dueDate":"2025-10-05"}'

```

### Get All Tasks

``` bash
curl http://localhost:3000/api/tasks

```

### Get a Single Task by ID

``` bash
curl http://localhost:3000/api/tasks/TASK_ID

```

### Update a Task

``` bash
curl -X PUT http://localhost:3000/api/tasks/TASK_ID \
-H "Content-Type: application/json" \
-d '{"title":"Updated Task","description":"Updated description","priority":"medium"}'

```

### Delete a Task

``` bash
curl -X DELETE http://localhost:3000/api/tasks/TASK_ID
```

### Try to update/delete non-existent task (should return 404)

``` bash
curl -X PUT http://localhost:3000/api/tasks/507f1f77bcf86cd799439011 \
-H "Content-Type: application/json" \
-d '{"title":"Should fail"}'

```

## NOTE:-
1. Replace POST_ID or TASK_ID with the actual _id returned when creating a post or task.

2. The /complete endpoint sets completed to true and automatically adds completedAt timestamp.

3. Task API supports optional filters for GET requests, e.g., ?completed=true&priority=high&page=1&limit=10.