# Dokan 🛒

Dokan is a full-stack e-commerce platform that connects sellers and customers in a seamless online marketplace. The project features a modern React frontend and a robust Node.js/Express backend, with MongoDB as the database. Dokan provides role-based dashboards, secure authentication, and a rich set of features for product and order management.

## ✨ Features

- 🔐 **User Authentication:** Secure signup and login for customers, sellers, and delivery agents.
- 🛍️ **Seller Dashboard:** Manage products, view orders, and track performance.
- 🛒 **Customer Dashboard:** Browse products, manage orders, and update profile information.
- 📦 **Product Management:** Add, edit, and view products with images and detailed descriptions.
- 📑 **Order Management:** Place, track, and manage orders for both customers and sellers.
- 💻 **Responsive UI:** Built with Material-UI for a consistent and modern look across devices.
- 🧑‍💼 **Role-Based Access:** Separate dashboards and features for different user roles.
- 🔄 **Redux State Management:** Efficient state handling on the frontend.
- 🌐 **API Integration:** RESTful APIs for all major operations.

## 🏆 Achievements

- 🚀 Built a scalable, modular full-stack application supporting multiple user roles and workflows.
- 🧩 Designed and implemented a robust authentication system using JWT and bcrypt.
- 🛠️ Developed reusable React components and integrated Redux for state management.
- 📈 Enhanced user experience with a responsive, visually appealing UI and smooth navigation.
- 🔗 Established seamless integration between frontend and backend using RESTful APIs.
- 🗃️ Modeled complex data relationships in MongoDB for products, users, orders, and reviews.
- 🧪 Applied best practices in code organization, error handling, and testing.
- 🌍 Enabled real-time updates and notifications for sellers and customers.

## 🗂️ Project Structure

- **client/**: React frontend with Redux, Material-UI, and modular components
- **server/**: Node.js/Express backend with RESTful APIs, authentication, and MongoDB models
- **config/**: Configuration files for database and environment variables
- **model/**: Mongoose schemas for users, products, orders, comments, and reviews
- **controller/**: Business logic for handling API requests
- **routers/**: Express route definitions for different modules
- **middleware/**: Custom middleware for authentication and validation
- **views/**: EJS templates for server-rendered pages

## 🚀 Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/ShaNaim/Dokan.git
   ```

2. **Install dependencies:**
   - For the client:
     ```sh
     cd client
     npm install
     ```
   - For the server:
     ```sh
     cd server
     npm install
     ```

3. **Run the development servers:**
   - Start the backend:
     ```sh
     cd server
     npm start
     ```
   - Start the frontend:
     ```sh
     cd client
     npm start
     ```

4. **Open your browser:**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend API: [http://localhost:5000](http://localhost:5000)

---

Whether you're a developer, seller, or customer, Dokan provides a robust foundation for building and scaling modern e-commerce solutions. Happy
