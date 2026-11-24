import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

import {
  fetchStudents,
  updateStudent,
  deleteStudent
} from "../redux/actions/studentActions";

function StudentDetails() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { students, loading } = useSelector((state) => state);

  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  const student = students.find((item) => item.id === id);

  const [formData, setFormData] = useState(null);

  useEffect(() => {
    if (!student) {
      dispatch(fetchStudents());
    }
  }, [dispatch, student]);

  useEffect(() => {
    if (student) {
      setFormData({ ...student });
    }
  }, [student]);

  if (loading || !formData) {
    return (
      <div className="text-center mt-5">
        {loading ? "Loading..." : "Student not found"}
      </div>
    );
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    setSaving(true);
    setError("");

    try {
      await dispatch(
        updateStudent(id, {
          ...formData,
          age: Number(formData.age)
        })
      );

      setIsEditing(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) return;

    try {
      await dispatch(deleteStudent(id));
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const fields = [
    { name: "name", label: "Student Name" },
    { name: "rollNumber", label: "Roll Number" },
    { name: "phone", label: "Phone" },
    { name: "email", label: "Email" },
    { name: "age", label: "Age", type: "number" },
    { name: "class", label: "Class" },
    { name: "grade", label: "Grade" },
    { name: "image", label: "Image URL", type: "url" }
  ];

  return (
    <div className="container py-5">

      <div className="details-container mx-auto card shadow-sm p-4">

        {error && (
          <div className="alert alert-danger">{error}</div>
        )}

        <div className="d-flex justify-content-between mb-4">
          <h2 className="fw-bold">Student Details</h2>

          <Link to="/" className="btn btn-outline-secondary">
            Back
          </Link>
        </div>

        {!isEditing && (
          <div className="text-center">

            <img
              src={student?.image || "https://placehold.co/150"}
              alt={student?.name}
              className="student-image mb-3"
            />

            <h3>{student?.name}</h3>

            <p className="text-muted">
              Roll Number: {student?.rollNumber}
            </p>

          </div>
        )}

        {isEditing ? (

          <form onSubmit={handleUpdate}>

            <div className="row g-3">

              {fields.map((field) => (
                <div className="col-md-6" key={field.name}>

                  <label className="form-label">
                    {field.label}
                  </label>

                  <input
                    type={field.type || "text"}
                    name={field.name}
                    className="form-control"
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                    required={field.name !== "image"}
                  />

                </div>
              ))}

            </div>

            <button
              type="submit"
              className="btn btn-success mt-4"
              disabled={saving}
            >
              {saving ? "Updating..." : "Save Changes"}
            </button>

            <button
              type="button"
              className="btn btn-secondary mt-4 ms-2"
              onClick={() => {
                setFormData({ ...student });
                setIsEditing(false);
              }}
            >
              Cancel
            </button>

          </form>

        ) : (

          <>
            <div className="row g-3 mt-3">

              {fields.filter((field) => field.name !== "image").map((field) => (
                <div className="col-md-6" key={field.name}>
                  <p className="mb-1 text-muted">{field.label}</p>
                  <h6>{student?.[field.name]}</h6>
                </div>
              ))}

            </div>

            <div className="mt-4 d-flex gap-2">

              <button
                className="btn btn-primary"
                onClick={() => setIsEditing(true)}
              >
                Edit Student
              </button>

              <button
                className="btn btn-danger"
                onClick={handleDelete}
              >
                Delete Student
              </button>

            </div>
          </>
        )}

      </div>
    </div>
  );
}

export default StudentDetails;