# Zerodha Clone – MERN Stack Project

A full-stack **Zerodha Clone** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**. This project replicates the basic user experience of a stock trading platform with user authentication, a trading dashboard, portfolio sections, and a responsive interface.

The project is divided into three major parts:

* **Frontend** – User-facing website for login/signup and accessing the application.
* **Backend** – REST API built with Node.js and Express.js for authentication and server-side operations.
* **Dashboard** – React-based trading dashboard for displaying user information, holdings, orders, positions, funds, and other sections.

## 🚀 Live Demo

**Frontend:**
https://zerodha-clone-1-wp2c.onrender.com

**Dashboard:**
https://zerodha-clone-2-7k55.onrender.com

## 📌 Features

### 🔐 User Authentication

* User signup and login
* Email and password authentication
* Authentication token handling
* Username storage and display
* Logout functionality

### 📊 Trading Dashboard

* Dashboard overview
* User profile section
* Personalized username display
* Orders section
* Holdings section
* Positions section
* Funds section
* Apps section
* Logout option

### 🎨 Frontend

* Responsive user interface
* Login and signup pages
* Clean and simple design
* React-based components
* Client-side routing

### ⚙️ Backend

* Node.js and Express.js server
* REST API
* User authentication APIs
* MongoDB database integration
* Password authentication
* Token-based authentication

## 🛠️ Technologies Used

### Frontend

* React.js
* JavaScript
* HTML
* CSS
* React Router

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT / Authentication
* bcrypt / bcryptjs

### Dashboard

* React.js
* React Router
* JavaScript
* CSS
* Local Storage

### Deployment

* GitHub
* Render

## 📁 Project Structure

```text
Zerodha-Clone/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│   ├── package.json
│   └── ...
│
├── dashboard/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── ...
│
└── README.md
```

## 🔄 Application Flow

```text
User
  │
  ▼
Frontend
  │
  │ Login / Signup Request
  ▼
Backend API
  │
  ▼
MongoDB
  │
  │ Authentication Response
  ▼
Frontend
  │
  ▼
Dashboard
  │
  ├── Dashboard
  ├── Orders
  ├── Holdings
  ├── Positions
  ├── Funds
  └── Apps
```

## 🔑 Authentication Flow

1. User opens the frontend application.
2. User creates an account or logs in.
3. Frontend sends the login request to the backend API.
4. Backend validates the user credentials.
5. Backend generates an authentication token.
6. Frontend stores the username and token.
7. User is redirected to the deployed dashboard.
8. Dashboard displays the logged-in user's information.
9. User can logout from the dashboard.
10. Logout clears the stored authentication information and redirects the user back to the login page.

## 🗄️ Database

The backend uses **MongoDB** as the database and **Mongoose** for database interaction.

The database is used to store user-related information and application data.

## 🌐 Deployment

The project is deployed using **Render**.

The application uses separate deployments for:

* Frontend
* Backend API
* Dashboard

GitHub is used for source-code management and automatic deployment.

## 💻 Running the Project Locally

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd Zerodha-Clone
```

### 2. Install Frontend Dependencies

```bash
cd frontend
npm install
npm start
```

### 3. Install Backend Dependencies

```bash
cd backend
npm install
npm start
```

### 4. Install Dashboard Dependencies

```bash
cd dashboard
npm install
npm start
```

## 🔐 Environment Variables

Create a `.env` file for sensitive configuration.

Example:

```env
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=3002
```

For the React frontend:

```env
REACT_APP_API_URL=your_backend_url
REACT_APP_DASHBOARD_URL=your_dashboard_url
```

**Do not upload `.env` files to GitHub.**

Add the following to `.gitignore`:

```text
.env
node_modules/
```

## 🎯 Project Objectives

The main objectives of this project are:

* To understand MERN stack development.
* To implement frontend and backend communication.
* To learn REST API development.
* To implement user authentication.
* To work with MongoDB and Mongoose.
* To understand React routing and components.
* To deploy a full-stack application.
* To understand how frontend, backend, and dashboard applications communicate with each other.

## 📚 Learning Outcomes

Through this project, I gained practical experience in:

* Full-stack web development
* React.js
* Node.js
* Express.js
* MongoDB
* Mongoose
* REST APIs
* Authentication
* React Router
* Git and GitHub
* Environment variables
* Deployment using Render
* Connecting multiple deployed services

## ⚠️ Disclaimer

This project is created **for educational and learning purposes only**. It is a clone inspired by the interface and workflow of Zerodha and is not affiliated with or endorsed by Zerodha.

## 👩‍💻 Author

**Sakshi Channe**

B.Tech – Information Technology
Priyadarshini Bhagwati College of Engineering, Nagpur
