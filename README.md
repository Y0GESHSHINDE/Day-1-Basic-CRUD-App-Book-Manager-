
# 📚 Book API - Node.js, Express & MongoDB

Welcome to Day 1 of my **10 Days of Node.js/Express/MongoDB** series!

This is a simple RESTful API built with **Node.js**, **Express.js**, and **MongoDB** using **Mongoose**. It allows you to **Create**, **Read**, **Update**, and **Delete** (CRUD) book entries.

---

## 🚀 Features

- Add a new book
- Get all books
- Get a book by ID
- Update a book
- Delete a book
- MongoDB connection using environment variables
- Organized folder structure

---

## 🧠 Technologies Used

- Node.js
- Express.js
- MongoDB (local)
- Mongoose
- dotenv

---

## 📁 Folder Structure

```
your-project/
├── models/
│   └── Book.js
├── routes/
│   └── bookRoutes.js
├── .env
├── index.js
├── package.json
└── README.md
```

---

## 📦 Installation & Setup

1. **Clone the repo**
```bash
git clone https://github.com/your-username/book-api.git
cd book-api
```

2. **Install dependencies**
```bash
npm install
```

3. **Create a `.env` file**
```
MONGO_URI=mongodb://127.0.0.1:27017/mybooks
PORT=5000
```

4. **Start the server**
```bash
npm start
```

Server will be running at:  
👉 `http://localhost:5000`

---

## 📬 API Endpoints

| Method | Endpoint          | Description           |
|--------|-------------------|-----------------------|
| GET    | `/getbooks`       | Get all books         |
| GET    | `/getbooks/:id`   | Get book by ID        |
| POST   | `/addbook`        | Add a new book        |
| PUT    | `/updatebooks/:id`| Update a book         |
| DELETE | `/deletebooks/:id`| Delete a book         |

---

## 🧪 Sample JSON for POST /books

```json
{
  "title": "The Alchemist",
  "author": "Paulo Coelho",
  "genre": "Fiction",
  "publishedYear": 1988
}
```

---

## 🔥 Learning Goal

This project is part of my **#10Days10Projects** challenge to master backend development using Node.js, Express, and MongoDB.


Follow the journey and stay tuned for the next builds!  
Happy coding 💻✨

---

## 🧑‍💻 Author

**Your Name**  
GitHub: [@Y0GESHSHINDE](https://github.com/y0geshshinde)  
Linkedin: [@Y0GESHSHINDE](https://www.linkedin.com/in/Y0GESHSHINDE/)


