# 🌊 Maritime Operations Dashboard

A full-stack web application that demonstrates user authentication, a responsive React dashboard UI, and marine ship data integration using mock APIs.

---

## 📌 Project Features

### 🔐 Authentication (Backend)
- User registration with email and password
- Secure password hashing using **bcrypt**
- Session handling with **JWT (JSON Web Token)**
- User data stored in **MongoDB**
- Protected route to get user info (`/auth/me`)

### 🖥️ Dashboard (Frontend)
- Built with **React.js**
- Responsive UI with **Tailwind CSS**
- Sidebar layout with welcome message
- Dummy marine data displayed in cards/charts
- **Ship search** functionality fetching mock ship data

### ⚓ Marine Data API
- API endpoint to get ship details by name
- Currently returns **mock data** for demonstration
- Easily extensible to integrate real marine APIs like [Equasis](https://www.equasis.org)

---

## 🔗 Links

- GitHub Repository: https://github.com/ganeshsabale99/Full-Stack-Developer-Assessment-
- Live Deployment-Frontend (Vercel): https://full-stack-developer-assessment.vercel.app/login
- Live Deployment-Backend (Render): https://full-stack-developer-assessment-yf1c.onrender.com

---

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Tailwind CSS
- Axios (for API calls)
- React Router DOM

**Backend:**
- Node.js
- Express.js
- MongoDB & Mongoose
- Bcrypt
- JSON Web Token (JWT)
- CORS, dotenv

- **Database:**
- MongoDB

- **Database:**
- VS Code
- GitHub
- Postman 

---


### 📂 Folder Structure

├── backend/
    ├── config/
    ├── controllers/
    ├── models/
    ├── routes/
    ├── middleware/
    ├── Postman/
    ├── .env
    └── server.js

└── frontend/
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   ├── context/
    │   ├── services/
    │   ├── pages/
    │   ├── inex.css
    │   └── App.jsx
    │   └── main.jsx


---

## 📸 Demo  
*Insert a short GIF or screenshots here showing login and dashboard*  

---

## ✍️ Author

**Ganesh Sabale**  
Full-stack Developer | React.js | MongoDB | REST APIs  
📧 sabaleganesh99@gmail.com  
📍 Pune, India

---

## 🚀 How to Run the Project Locally

### 1. Clone the Repository

```bash
git clone https://github.com/ganeshsabale99/Full-Stack-Developer-Assessment-.git
cd Full-Stack-Developer-Assessment


## 2. Setup Backend

```bash
cd backend
npm install


## 🔑 Environment Variables

Create a `.env` file in the `backend/` directory with the following content:

```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster0.example.mongodb.net/
JWT_SECRET=maritime_123
NODE_ENV=development
JWT_EXPIRE=1d


## 3. Setup Frontend

```bash
cd ../frontend
npm install
npm run dev






