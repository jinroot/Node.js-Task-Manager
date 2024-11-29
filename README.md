# Task Manager Project

This is a **Task Manager Application** built using Node.js, Express.js, MongoDB, and other modern web development tools. The application allows users to create, read, update, and delete tasks. It also implements session tracking to provide unique user experiences, where users can view their tasks based on a unique session ID stored in cookies.

The application is deployed on [Railway](https://railway.app/).

---

## Features

- **Task Management:**
  - Create new tasks.
  - View all tasks.
  - Update task details (e.g., mark as completed).
  - Delete tasks.
- **Session Tracking:**
  - Each user is assigned a unique session ID stored in a cookie.
  - Tasks are associated with the session, so users can revisit and see their tasks without logging in.
- **RESTful API:**
  - Follows REST architecture for managing tasks.
  - Endpoints for CRUD operations.
- **Responsive Design:**
  - Frontend served from static files in the `/public` directory.
- **Database Integration:**
  - MongoDB for storing tasks and session data.
- **Secure Cookies:**
  - Session cookies are secured for production environments.

---

## Technologies Used

### Backend
- **Node.js**
- **Express.js**
- **MongoDB** (via **Mongoose**)

### Frontend
- HTML, CSS, and JavaScript (served from the `/public` directory)

### Other Tools
- **dotenv** for environment variables
- **express-session** for session management
- **connect-mongo** for storing sessions in MongoDB
- **Railway** for deployment
- **Nodemon** for local development

---

## Getting Started

### Prerequisites
1. Node.js (v18 or higher recommended)
2. MongoDB (local or hosted; e.g., MongoDB Atlas)
3. Railway or other deployment platform (optional)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/jinroot/Node.js-Task-Manager
   cd task-manager
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and configure the following variables:
   ```
   MONGO_URI=<your-mongodb-uri>
   SERVER_PORT=3000
   SECRET_KEY=<your-secret-key>
   NODE_ENV=development
   ```

4. Start the application in development mode:
   ```bash
   npm start
   ```

5. Open the app in your browser at `http://localhost:3000`.

---

## Deployment

1. Deploy the project to Railway or your preferred hosting provider.
2. Update your `.env` file to set `NODE_ENV=production` and ensure your `MONGO_URI` points to a hosted MongoDB database.
3. Ensure HTTPS is enabled on the server, as secure cookies require it.

---

## API Endpoints

| Method | Endpoint           | Description               |
|--------|--------------------|---------------------------|
| GET    | `/api/v1/tasks`    | Fetch all tasks           |
| POST   | `/api/v1/tasks`    | Create a new task         |
| GET    | `/api/v1/tasks/:id`| Fetch a specific task     |
| PATCH  | `/api/v1/tasks/:id`| Update an existing task   |
| DELETE | `/api/v1/tasks/:id`| Delete a specific task    |

---

## Folder Structure

```
task-manager/
├── controllers/         # Controller logic for API routes
├── db/                  # MongoDB connection logic
├── middleware/          # Custom middleware (error handling, etc.)
├── models/              # Mongoose schemas/models
├── public/              # Static frontend files
├── routes/              # Route definitions
├── .env                 # Environment variables
├── app.js               # Main application file
└── package.json         # NPM scripts and dependencies
```

---

## Future Enhancements
- Add user authentication for multi-user support.
- Improve the frontend with frameworks like React or Vue.
- Implement task prioritization and deadlines.
- Add integration tests for APIs.

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments
- Built with guidance and best practices for Node.js and Express applications.
- Deployed using [Railway](https://railway.app/).

---

Feel free to submit issues or pull requests to improve the application! 😊
