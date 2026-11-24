const API_URL = "http://localhost:5000/students";

const api = {
  getStudents: async () => {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch students");
    }

    return response.json();
  },

  addStudent: async (student) => {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(student)
    });

    if (!response.ok) {
      throw new Error("Failed to add student");
    }

    return response.json();
  },

  updateStudent: async (id, student) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(student)
    });

    if (!response.ok) {
      throw new Error("Failed to update student");
    }

    return response.json();
  },

  deleteStudent: async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE"
    });

    if (!response.ok) {
      throw new Error("Failed to delete student");
    }

    return id;
  }
};

export default api;