import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      email === "admin@gmail.com" &&
      password === "admin123"
    ) {
      localStorage.setItem(
        "user",
        JSON.stringify({ email })
      );

      navigate("/");
    } else {
      setError("Invalid Email or Password");
    }
  };

  return (
    <div className="login-wrapper">

      <div className="card login-card shadow p-4">

        <h2 className="text-center fw-bold mb-2">
          Welcome Back
        </h2>

        <p className="text-center text-muted mb-4">
          Student Management Login
        </p>

        {error && (
          <div className="alert alert-danger">{error}</div>
        )}

        <form onSubmit={handleLogin}>

          <div className="mb-3">
            <label className="form-label">Email</label>

            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>

            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="btn btn-primary w-100">
            Login
          </button>

        </form>

        <div className="alert alert-info mt-3 mb-0">
          <small>
            Email: admin@gmail.com<br />
            Password: admin123
          </small>
        </div>

      </div>
    </div>
  );
}

export default Login;