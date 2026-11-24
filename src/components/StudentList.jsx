import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStudents } from "../redux/actions/studentActions";

function StudentList() {
  const dispatch = useDispatch();

  const { students, loading, error } = useSelector(
    (state) => state
  );

  const [search, setSearch] = useState("");
  const [filterClass, setFilterClass] = useState("");
  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  const classes = [
    ...new Set(students.map((student) => student.class))
  ];

  const filteredStudents = useMemo(() => {
    return [...students]
      .filter((student) =>
        student.name.toLowerCase().includes(search.toLowerCase())
      )
      .filter((student) =>
        filterClass ? student.class === filterClass : true
      )
      .sort((a, b) => {
        if (sortBy === "rollNumber") {
          return a.rollNumber.localeCompare(b.rollNumber);
        }

        return a.name.localeCompare(b.name);
      });
  }, [students, search, filterClass, sortBy]);

  if (loading) {
    return <h4 className="text-center mt-5">Loading Students...</h4>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="container py-4">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold">Student List</h2>
          <p className="text-muted">Manage all students</p>
        </div>

        <Link to="/add" className="btn btn-primary">
          + Add Student
        </Link>
      </div>

      <div className="row g-3 mb-4">

        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search student..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-md-4">
          <select
            className="form-select"
            value={filterClass}
            onChange={(e) => setFilterClass(e.target.value)}
          >
            <option value="">All Classes</option>

            {classes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-4">
          <select
            className="form-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="name">Sort By Name</option>
            <option value="rollNumber">Sort By Roll Number</option>
          </select>
        </div>

      </div>

      <div className="row g-4">

        {filteredStudents.map((student) => (
          <div className="col-md-6 col-lg-4" key={student.id}>

            <div className="card student-card h-100 shadow-sm">

              <div className="card-body text-center">

                <img
                  src={student.image || "https://placehold.co/100"}
                  alt={student.name}
                  className="student-image mb-3"
                />

                <h5 className="fw-bold">{student.name}</h5>

                <p className="text-muted mb-1">
                  Roll No: {student.rollNumber}
                </p>

                <p className="mb-1">{student.class}</p>

                <span className="badge bg-success mb-3">
                  Grade: {student.grade}
                </span>

                <div>
                  <Link
                    to={`/student/${student.id}`}
                    className="btn btn-primary btn-sm w-100"
                  >
                    View Details
                  </Link>
                </div>

              </div>
            </div>
          </div>
        ))}

        {filteredStudents.length === 0 && (
          <div className="col-12 text-center py-5">
            <h5>No Students Found</h5>
          </div>
        )}

      </div>
    </div>
  );
}

export default StudentList;