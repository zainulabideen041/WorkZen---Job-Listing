# Workzen-Pro Authentication System

Complete authentication system with login, register,and dashboard functionality.

## Features

### Backend (Node.js/Express)

- User registration with password hashing (bcryptjs)
- User login with JWT authentication
- Protected routes with authentication middleware
- MongoDB database integration
- Input validation
- RESTful API design

### Frontend (React + Vite)

- Login page
- Registration page
- Protected dashboard
- Auth context for state management
- Protected route wrapper
- Dynamic navbar with profile icon and logout

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

## Setup Instructions

### 1. Backend Setup

```bash
cd backend
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the backend directory (already created):

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/workzen-pro
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRE=7d
NODE_ENV=development
```

**IMPORTANT**: If you're using MongoDB Atlas or a different MongoDB URI, update the `MONGODB_URI` value.

### 3. Start MongoDB

If using local MongoDB:

```bash
# Windows
net start MongoDB

# Mac/Linux
sudo systemctl start mongod
```

If using MongoDB Atlas, ensure your connection string is correct in the `.env` file.

### 4. Start Backend Server

```bash
cd backend
npm run dev
```

The server will run on `https://workzen-backend.vercel.app`

### 5. Start Frontend

```bash
cd frontend
npm run dev
```

The frontend will run on `http://localhost:5173`

## API Endpoints

### Public Routes

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Protected Routes

- `GET /api/auth/profile` - Get user profile (requires JWT token)

## Frontend Routes

- `/` - Home page
- `/login` - Login page
- `/register` - Registration page
- `/dashboard` - Protected dashboard (requires authentication)
- `/pricing` - Pricing page
- `/contact` - Contact page
- `/about` - About page

## How to Use

1. **Register**: Go to `/register` and create a new account
2. **Login**: Use your credentials to log in at `/login`
3. **Dashboard**: After login, you'll be redirected to `/dashboard`
4. **Navbar**: When logged in, you'll see your profile icon and logout button
5. **Logout**: Click the logout button to sign out

## Project Structure

```
backend/
├── config/
│   └── db.js              # MongoDB connection
├── controllers/
│   └── authController.js  # Auth logic
├── middleware/
│   └── authMiddleware.js  # JWT verification
├── models/
│   └── User.js           # User model
├── routes/
│   └── authRoutes.js     # API routes
├── utils/
│   └── jwt.js            # JWT utilities
├── .env                   # Environment variables
├── package.json
└── server.js             # Entry point

frontend/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Updated with auth
│   │   └── ProtectedRoute.jsx    # Route protection
│   ├── context/
│   │   └── AuthContext.jsx       # Auth state management
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── Dashboard.jsx
│   └── App.jsx                    # Router setup
└── package.json
```

## Security Notes

- Passwords are hashed using bcryptjs
- JWT tokens are used for authentication
- Protected routes require valid JWT token
- Change `JWT_SECRET` in production
- Use HTTPS in production

## Troubleshooting

### Cannot connect to MongoDB

- Ensure MongoDB is running
- Check your MongoDB URI in `.env`
- For Atlas, ensure your IP is whitelisted

### CORS errors

- Backend has CORS enabled for all origins
- In production, configure CORS to allow only your frontend domain

### 401 Unauthorized

- Ensure you're sending the JWT token in the Authorization header as `Bearer <token>`
- Token is automatically managed by the frontend Auth Context
