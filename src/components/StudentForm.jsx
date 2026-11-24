import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addStudent } from "../redux/actions/studentActions";

function StudentForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    rollNumber: "",
    phone: "",
    email: "",
    age: "",
    class: "",
    grade: "",
    image: ""
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      await dispatch(
        addStudent({
          ...formData,
          age: Number(formData.age)
        })
      );

      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">

      <div className="form-container mx-auto">

        <h2 className="fw-bold mb-4">Add New Student</h2>

        {error && (
          <div className="alert alert-danger">{error}</div>
        )}

        <form onSubmit={handleSubmit}>

          <div className="row g-3">

            <div className="col-md-6">
              <label className="form-label">Student Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Roll Number</label>
              <input
                type="text"
                name="rollNumber"
                className="form-control"
                placeholder="Enter roll number"
                value={formData.rollNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Phone</label>
              <input
                type="tel"
                name="phone"
                className="form-control"
                placeholder="Enter phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Age</label>
              <input
                type="number"
                name="age"
                className="form-control"
                placeholder="Enter age"
                min="1"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Class</label>
              <select
                name="class"
                className="form-select"
                value={formData.class}
                onChange={handleChange}
                required
              >
                <option value="">Select Class</option>
                <option value="10th">10th</option>
                <option value="11th Science">11th Science</option>
                <option value="12th Science">12th Science</option>
                <option value="12th Commerce">12th Commerce</option>
                <option value="12th Arts">12th Arts</option>
              </select>
            </div>

            <div className="col-md-6">
              <label className="form-label">Grade</label>
              <select
                name="grade"
                className="form-select"
                value={formData.grade}
                onChange={handleChange}
                required
              >
                <option value="">Select Grade</option>
                <option value="A+">A+</option>
                <option value="A">A</option>
                <option value="B+">B+</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
            </div>

            <div className="col-md-6">
              <label className="form-label">Image URL</label>
              <input
                type="url"
                name="image"
                className="form-control"
                placeholder="Enter image URL"
                value={formData.image}
                onChange={handleChange}
              />
            </div>

          </div>

          <button
            type="submit"
            className="btn btn-primary mt-4 w-100"
            disabled={loading}
          >
            {loading ? "Saving..." : "Add Student"}
          </button>

        </form>
      </div>
    </div>
  );
}

export default StudentForm;