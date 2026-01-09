# WorkZen-Pro - Modern Job Listing & Workforce Management Platform

![WorkZen-Pro Banner](https://workzen-joblisting.vercel.app/assets/hero-C1v_l7iB.png)

**Live Preview:** [https://workzen-joblisting.vercel.app](https://workzen-joblisting.vercel.app)

WorkZen-Pro is a full-stack MERN (MongoDB, Express, React, Node.js) application designed to revolutionize workforce management. It allows users to post jobs, manage applications, and streamline the hiring process with a modern, responsive interface.

## 🚀 Features

- **User Authentication:** Secure Sign Up and Login for employers and candidates.
- **Job Management:** Create, Read, Update, and Delete (CRUD) job postings.
- **Rich Text Editor:** Built-in WYSIWYG editor for detailed job descriptions.
- **Dashboard:** specialized dashboard for managing listings and applications.
- **Responsive Design:** Fully responsive UI built with Tailwind CSS, optimized for Mobile, Tablet, and Desktop.
- **Search & Filtering:** Easy job search functionality.
- **Application Tracking:** (Coming Soon) Track candidate status.

## 🛠️ Tech Stack

### Frontend

- **React (v19):** Modern UI library for building interactive interfaces.
- **Vite:** Blazing fast build tool and development server.
- **Tailwind CSS:** Utility-first CSS framework for custom designs.
- **React Router DOM:** For seamless client-side navigation.

### Backend

- **Node.js & Express:** Robust backend runtime and web framework.
- **MongoDB & Mongoose:** NoSQL database for flexible data storage.
- **JWT (JSON Web Tokens):** For secure stateless authentication.
- **BcryptJS:** For password hashing and security.
- **Cors:** To handle Cross-Origin Resource Sharing.

## ⚙️ Installation & Setup

Follow these steps to set up the project locally on your machine.

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (Local or Atlas URL)

### 1. Clone the Repository

```bash
git clone https://github.com/zainulabideen041/WorkZen---Job-Listing.git
cd WorkZen---Job-Listing
```

### 2. Backend Setup

Navigate to the backend directory and install dependencies:

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory with the following variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

Start the backend server:

```bash
# For development (requires nodemon)
npm run dev

# For production
npm start
```

The server will start on `http://localhost:5000`.

### 3. Frontend Setup

Open a new terminal, navigate to the frontend directory and install dependencies:

```bash
cd frontend
npm install
```

Start the frontend development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## 📂 Project Structure

```
WorkZen-Pro/
├── backend/                # Node.js/Express Backend
│   ├── config/            # Database configuration
│   ├── controllers/       # Route logic
│   ├── middleware/        # Auth & error handling
│   ├── models/            # Mongoose Schemas
│   ├── routes/            # API Routes
│   └── server.js          # Entry point
│
├── frontend/               # React Frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── context/       # Auth Context
│   │   ├── pages/         # Application Pages (Home, Dashboard, etc.)
│   │   └── App.jsx        # Main Component
│   └── package.json
│
└── README.md
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is licensed under the ISC License.
