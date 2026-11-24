# Student Management System

A React-based Student Management System that allows users to manage student records with CRUD operations. The application uses Redux and Redux Thunk for state management and JSON Server as a backend API.

## 🚀 Features

- **Student List:** Display all students dynamically.
- **Add Student:** Add new students with complete details.
- **View Details:** View individual student information.
- **Update Student:** Edit existing student records.
- **Delete Student:** Remove student records.
- **Search:** Search students by name.
- **Sorting:** Sort students by name or roll number.
- **Filtering:** Filter students by class.
- **Authentication:** Simple admin login and logout.
- **Private Routes:** Restrict student pages to authenticated users.
- **Responsive Navbar:** Navigation for desktop and mobile devices.
- **Bootstrap UI:** Clean and responsive user interface.

## 🛠️ Technologies Used

- React.js
- React Router DOM
- Redux
- React Redux
- Redux Thunk
- Bootstrap 5
- React Icons
- JSON Server
- JavaScript
- CSS

## 📁 Project Structure

```text
student-management/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── PrivateRoute.jsx
│   │   ├── StudentList.jsx
│   │   ├── StudentForm.jsx
│   │   └── StudentDetails.jsx
│   │
│   ├── pages/
│   │   ├── Login.jsx
│   │   └── Profile.jsx
│   │
│   ├── redux/
│   │   ├── actions/
│   │   │   └── studentActions.js
│   │   ├── reducers/
│   │   │   └── studentReducer.js
│   │   └── store.js
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.js
│   ├── App.css
│   └── index.js
│
├── db.json
├── package.json
└── README.md
```

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Open Project Folder

```bash
cd student-management
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start React Application

```bash
npm start
```

React application will run at:

```text
http://localhost:3000
```

### 5. Start JSON Server

Open another terminal and run:

```bash
npm run server
```

JSON Server will run at:

```text
http://localhost:5000
```

API endpoint:

```text
http://localhost:5000/students
```

## 🗄️ JSON Server

JSON Server is used as a mock backend to store and manage student information.

The `db.json` file contains student records with the following fields:

- ID
- Name
- Roll Number
- Phone
- Email
- Age
- Class
- Grade
- Image

### API Operations

| Method | Endpoint | Description |
|---|---|---|
| GET | `/students` | Get all students |
| GET | `/students/:id` | Get one student |
| POST | `/students` | Add student |
| PUT | `/students/:id` | Update student |
| DELETE | `/students/:id` | Delete student |

## 🔐 Login Credentials

Use the following demo credentials to access the application:

| Field | Credentials |
|---|---|
| Email | admin@gmail.com |
| Password | admin123 |

**Note:** This is a demo authentication system using localStorage. It is not intended for production security.

## 🔄 Redux State Management

Redux is used to manage student data across the application.

### Actions

- FETCH_STUDENTS_REQUEST
- FETCH_STUDENTS_SUCCESS
- FETCH_STUDENTS_FAILURE
- ADD_STUDENT_SUCCESS
- UPDATE_STUDENT_SUCCESS
- DELETE_STUDENT_SUCCESS

Redux Thunk handles asynchronous API operations such as fetching, adding, updating and deleting students.

## 📋 Student Management Operations

1. Login using admin credentials.
2. View all available students.
3. Add a new student.
4. Open student details.
5. Edit student information.
6. Delete student records.
7. Search students by name.
8. Sort students by name or roll number.
9. Filter students by class.
10. View admin profile.
11. Logout from the application.

## 📱 Responsive Design

The application uses Bootstrap 5 to provide a responsive layout that works on:

- Desktop
- Laptop
- Tablet
- Mobile

