import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";

import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import StudentDetails from "./components/StudentDetails";

import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* Public Route */}
        <Route path="/login" element={<Login />} />

        {/* Private Routes */}
        <Route element={<PrivateRoute />}>

          <Route path="/" element={<StudentList />} />

          <Route path="/add" element={<StudentForm />} />

          <Route
            path="/student/:id"
            element={<StudentDetails />}
          />

          <Route path="/profile" element={<Profile />} />

        </Route>

        <Route
          path="*"
          element={
            <div className="container text-center py-5">
              <h2>404 - Page Not Found</h2>
            </div>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;