# Employee Management Backend (Node.js + Express + MongoDB)

This project is a backend application built with **Node.js**, **Express.js**, and **MongoDB**. It provides a RESTful API to perform CRUD (Create, Read, Update, Delete) operations on an employee database.

---

## Features
- RESTful API for managing employee data.
- MongoDB integration using Mongoose.
- Modular and scalable code structure.
- API Endpoints for:
  - Creating employees.
  - Reading employee data.
  - Updating employee details.
  - Deleting employees.

---

## Tech Stack
- **Node.js**: Server-side runtime.
- **Express.js**: Web framework for handling API routes.
- **MongoDB**: NoSQL database for storing employee data.
- **Mongoose**: ODM for MongoDB.
- **dotenv**: Environment variable management.
- **body-parser**: Parsing incoming request bodies.

---

## Installation and Usage

### Prerequisites
- Node.js installed on your machine.
- MongoDB connection URL.
- A `.env` file with the following environment variables:

PORT=3000 
DB_HOST=<your-database-host> 
DB_USERNAME=<your-username> 
DB_PASS=<your-password> 
DB_ENDPOINT=<your-database-endpoint>


### Steps to Run Locally
1. Clone the repository:
 git clone https://github.com/<your-username>/employee-management-backend.git
 cd employee-management-backend
2. Install Dependencies
   npm install
3. Set up the .env file as described above.
4. Install nodemon globally
   npm install -g nodemon
5. Start the server using nodemon:
   nodemon index.js
6. Access the API:
   Base URL: http://localhost:3000
   Example Endpoint: http://localhost:3000/api/user/list

### Note:
- Replace placeholders like `<your-username>`, `<your-database-host>`, and `<your-profile>` with your actual details.
