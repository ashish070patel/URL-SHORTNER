# 🔗 URL Shortener

A scalable and efficient URL Shortener application that converts long URLs into short, shareable links with fast redirection and optional analytics.

---

## 📌 Features

* 🔗 Convert long URLs into short links
* ⚡ Instant redirection
* 📊 Click tracking (if implemented)
* 🧠 Unique short code generation
* 🌐 RESTful API
* 💾 Persistent storage using database
* 🔒 Environment-based configuration

---

## 🛠️ Tech Stack

| Layer    | Technology                    |
| -------- | ----------------------------- |
| Frontend | HTML, CSS, JavaScript / React |
| Backend  | Node.js, Express.js           |
| Database | MongoDB (Mongoose)            |
| Tools    | dotenv, nanoid / shortid      |

---

## 🏗️ System Architecture

```
Client (Browser/Postman)
        │
        ▼
Express Server (API Layer)
        │
        ▼
Business Logic (Controllers)
        │
        ▼
Database (MongoDB)
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/ashish070patel/URL-SHORTNER.git
cd URL-SHORTNER
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
BASE_URL=http://localhost:5000
```

---

### 4️⃣ Run the Application

```bash
npm start
```

or for development:

```bash
npm run dev
```

---

## 🔌 API Documentation

### ➤ 1. Shorten URL

**Endpoint:**

```
POST /api/shorten
```

**Request Body:**

```json
{
  "longUrl": "https://example.com"
}
```

**Response:**

```json
{
  "shortUrl": "http://localhost:5000/abc123"
}
```

---

### ➤ 2. Redirect to Original URL

**Endpoint:**

```
GET /:shortCode
```

**Behavior:**

* Redirects user to original URL

---

## 🧠 How It Works

1. User submits a long URL
2. Server validates the URL
3. Generates a unique short code (e.g., `abc123`)
4. Stores mapping in database
5. Returns short URL
6. When accessed → redirects to original URL

---

## 🗃️ Project Structure

```
URL-SHORTNER/
│── server/
│   ├── models/         # MongoDB schemas
│   ├── routes/         # API routes
│   ├── controllers/    # Logic layer
│   ├── config/         # DB connection
│── client/             # Frontend (optional)
│── .env
│── package.json
│── README.md
```

---

## 🔒 Environment Variables

| Variable  | Description                  |
| --------- | ---------------------------- |
| PORT      | Server port                  |
| MONGO_URI | MongoDB connection string    |
| BASE_URL  | Base URL for shortened links |

---

## 📄 License

This project is licensed under the **MIT License**

---
