# 💰 Expense Tracker App - Backend

This is the **backend service** for the Expense Tracker App.  
It provides APIs for authentication, expense tracking, caching, and rate limiting.

---

## 🚀 Tech Stack

- **Database**: [Neon](https://neon.tech/) – Serverless PostgreSQL
- **Authentication**: [Clerk](https://clerk.com/) Dashboard for secure user management
- **Cache & Rate Limiting**: [Upstash Redis](https://upstash.com/) for caching and API rate limiting
- **Deployment**: [Render](https://render.com/) for hosting the backend

---

## 📂 Project Structure

src/
├── config/ # Configuration files (DB, Upstash, etc.)
├── controllers/ # Route handlers (business logic)
├── middleware/ # Middleware functions (auth, rate limit, etc.)
├── routes/ # API endpoints
server.js # Main server entry point
.gitignore
README.md
package.json
package-lock.json

---

## ⚙️ Environment Variables

Create a `.env` file in the root folder:

env
DATABASE_URL=your_neon_database_url

UPSTASH_REDIS_REST_URL=your_upstash_redis_rest_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_rest_token
PORT=5001

## 🛠 Getting Started
Clone the repository

```bash
git clone https://github.com/mohammad-umair32/Expense-Tracker-App-Backend.git
cd Expense-Tracker-App-Backend
```

1. Install dependencies

```bash
npm install
```

2. Set up environment variables

   Copy .env.example → .env and add your credentials

3. Run in development

```bash
npm run dev
```

4. Build for production

```bash
npm run build
```

5. Start production server

```bash
npm start
```

📦 Deployment
Hosted on Render

Every push to the master branch triggers an auto-deploy


📜 License
This project is licensed under the MIT License.


