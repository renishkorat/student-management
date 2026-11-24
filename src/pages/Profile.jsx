function Profile() {
  const user = JSON.parse(
    localStorage.getItem("user") || "null"
  );

  return (
    <div className="container py-5">

      <div className="card shadow-sm p-4 mx-auto profile-card">

        <div className="text-center">

          <div className="profile-avatar mx-auto mb-3">
            {user?.email?.charAt(0).toUpperCase()}
          </div>

          <h3 className="fw-bold">Admin Profile</h3>

          <p className="text-muted">
            {user?.email}
          </p>

          <span className="badge bg-success">
            Administrator
          </span>

        </div>

      </div>
    </div>
  );
}

export default Profile;