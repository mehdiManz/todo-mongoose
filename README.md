

# Todo App with Mongoose

Welcome to the Todo App with Mongoose repository! This project aims to provide a simple and efficient web application for managing and organizing your daily tasks using the Mongoose ODM (Object Data Modeling) library for MongoDB.

## Features

- Task Creation: Users can create new tasks by providing a title and optional description.
- Task Listing: Tasks are displayed in a list format, showing the title, description, and completion status.
- Task Editing: Users can edit the title, description, and completion status of existing tasks.
- Task Deletion: Users can delete tasks they no longer need.
- Task Filtering: Users can filter tasks based on their completion status (completed or incomplete).
- Task Sorting: Tasks can be sorted based on their creation date or completion status.
- User Authentication: Users can create an account, log in, and manage their own set of tasks securely.

## Technologies Used

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Database: MongoDB with Mongoose ODM
- Authentication: Passport.js
- Templating Engine: Handlebars
- Other Dependencies: Bootstrap, Express-session, etc.

## Installation

1. Clone the repository: `git clone https://github.com/mehdiManz/todo-mongoose.git`
2. Navigate to the project directory: `cd todo-mongoose`
3. Install the required dependencies: `npm install`
4. Set up the database: [Instructions for setting up MongoDB](https://docs.mongodb.com/manual/installation/)
5. Configure the application: Create a `.env` file and provide the necessary configuration details (e.g., database connection string, session secret).
6. Start the application: `npm start`
7. Access the application in your web browser at `http://localhost:3000`

## Contributing

Contributions to this project are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b my-feature`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-feature`
5. Open a pull request, describing the changes you've made.

