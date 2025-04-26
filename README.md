# RBAC Blog Application

This project is a **Role-Based Access Control (RBAC) Blog Application**. It allows users to sign up, log in, and view blog posts. Admin users have additional privileges to create, update, and delete blog posts. The application is built with a **React frontend**, a **Node.js backend**, and **MongoDB** as the database.

---

## Features

1. **Role-Based Access Control (RBAC):**
   - Admin users can manage blog posts (create, update, delete).
   - Regular users can only view blog posts.

2. **Authentication and Authorization:**
   - JWT-based authentication.
   - Middleware for role-based authorization.

3. **Frontend:**
   - Built with React.
   - Responsive and user-friendly interface.

4. **Backend:**
   - RESTful API built with Express.js.
   - MongoDB for data storage.

5. **Security:**
   - Passwords hashed using bcrypt.
   - JWT tokens for secure authentication.

6. **Additional Features:**
   - Toast notifications for user feedback.
   - Admin dashboard for managing blog posts.

---

## Architecture

### Overview

The application follows a **client-server architecture** with the following components:

1. **Frontend (React):**
   - Handles user interactions and displays data fetched from the backend.
   - Communicates with the backend via RESTful API.

2. **Backend (Node.js + Express):**
   - Provides RESTful API endpoints for authentication, blog management, and user management.
   - Implements middleware for authentication and role-based authorization.

3. **Database (MongoDB):**
   - Stores user data and blog posts.
   - Relationships between users and blog posts are managed using Mongoose.

### Architecture Diagram

```plaintext
+----------------+       +----------------+       +----------------+
|                |       |                |       |                |
|    Frontend    | <---> |    Backend     | <---> |    Database    |
|  (React App)   |       | (Node.js API)  |       |   (MongoDB)    |
|                |       |                |       |                |
+----------------+       +----------------+       +----------------+


# Data Flow

## Authentication:

1. User submits login credentials via the frontend.
2. Backend validates credentials and issues a JWT token.
3. Token is stored in the frontend (e.g., localStorage) and used for subsequent API requests.

## Authorization:

1. Backend uses middleware to verify JWT tokens and enforce role-based access control.

## Blog Management:

1. Admin users can create, update, and delete blog posts via the Admin Dashboard.
2. Regular users can view blog posts.


# Installation and Setup

## Backend

1. Navigate to the backend directory:
   `cd rbac-blog-backend`

2. Install dependencies:
   `npm install`

3. Create a `.env` file in the `rbac-blog-backend` directory with the following content:

## Environment Variables Configuration

Create a `.env` file in your backend directory with the following variables:

```env
PORT=5000
MONCODB_URL=mongodb://localhost:27017/rbac_blog
JWI_SECRET=your_jwt_secret



4. Start the backend server:
`npm run dev`
The backend server will run on [http://localhost:5000](#).

## Frontend

1. Navigate to the frontend directory:
`cd rbac-blog-frontend`

2. Install dependencies:
`npm install`

3. Start the frontend development server:
`npm start`
The frontend will run on [http://localhost:3000](#).



## Folder Structure

### Backend

rbac-blog-backend/
├── .env
├── package.json
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── blogController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── BlogPost.js
│   │   └── User.js
│   ├── routes/
│   │   ├── admin.js
│   │   ├── auth.js
│   │   ├── blog.js
│   └── index.js


### Frontend

rbac-blog-frontend/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── pages/
│   │   ├── AdminDashboard.js
│   │   ├── Home.js
│   │   ├── Login.js
│   │   └── Signup.js
│   ├── services/
│   │   └── api.js
│   ├── styles.css
│   └── setupTests.js



This `README.md` file includes all the necessary sections, including a detailed architecture explanation, installation instructions, and submission guidelines. You can customize the placeholders (e.g., `[Insert Due Date Here]`) as needed.This `README.md` file includes all the necessary sections, including a detailed architecture explanation, installation instructions, and submission guidelines. You can customize the placeholders (e.g., `[Insert Due Date Here]`) as needed.