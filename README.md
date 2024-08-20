# Welcome my project! This is a simple yet robust blogging platform built using the Model-View-Controller (MVC) architecture. The application is designed to allow users to create, edit, and manage blog posts efficiently. The project is built with modern web technologies and follows best practices to ensure scalability and maintainability.

# Table of Contents
Features
Technologies Used
Installation
Usage
Configuration
Contributing
License
# Features
MVC Architecture: Organized structure separating models, views, and controllers for cleaner code and easier maintenance.
User Authentication: Secure login and registration system for users.
CRUD Operations: Create, read, update, and delete blog posts.
Responsive Design: User-friendly interface accessible on various devices.
Search and Filtering: Easily find and filter blog posts.
# Technologies Used
Node.js: JavaScript runtime for building the server-side application.
Express.js: Web framework for Node.js to handle routing and middleware.
Sequelize: ORM for managing database operations with PostgreSQL.
PostgreSQL: Relational database for storing blog posts and user data.
Handlebars: Templating engine for rendering views.
Yarn: Package manager to manage project dependencies.
dotenv: Environment variable management.
# Installation
1. Clone the Repository,
2.Install Dependencies,
3. Copy code,
4. run yarn install,
5.Create a .env file in the root directory and add the following variables,
6.Set up the database schema,
7.Run using yarn start

# Usage
Navigate to http://localhost:3000 to access the blog site.
Sign up or log in to start creating and managing blog posts.
Use the navigation menu to explore different sections of the blog.
Configuration
Database Configuration: Adjust the .env file to connect to your PostgreSQL database.
Session Secret: Update SESSION_SECRET in the .env file for securing user sessions.
Contributing
Contributions are welcome! Please follow these steps:

#Fork the repository.
Create a new branch for your feature or bug fix.
Submit a pull request with a clear description of your changes.
License
This project is licensed under the MIT License. See the LICENSE file for details.
