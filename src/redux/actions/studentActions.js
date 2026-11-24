import api from "../../services/api";

//action type
export const FETCH_STUDENTS_REQUEST = "FETCH_STUDENTS_REQUEST";
export const FETCH_STUDENTS_SUCCESS = "FETCH_STUDENTS_SUCCESS";
export const FETCH_STUDENTS_FAILURE = "FETCH_STUDENTS_FAILURE";

export const ADD_STUDENT_SUCCESS = "ADD_STUDENT_SUCCESS";
export const UPDATE_STUDENT_SUCCESS = "UPDATE_STUDENT_SUCCESS";
export const DELETE_STUDENT_SUCCESS = "DELETE_STUDENT_SUCCESS";

// fetch student

export const fetchStudents = () => async (dispatch) => {
  dispatch({ type: FETCH_STUDENTS_REQUEST });

  try {
    const students = await api.getStudents();

    dispatch({
      type: FETCH_STUDENTS_SUCCESS,
      payload: students
    });
  } catch (error) {
    dispatch({
      type: FETCH_STUDENTS_FAILURE,
      payload: error.message
    });
  }
};

// Add Student
export const addStudent = (student) => async (dispatch) => {
  try {
    const newStudent = await api.addStudent(student);

    dispatch({
      type: ADD_STUDENT_SUCCESS,
      payload: newStudent
    });

    return newStudent;
  } catch (error) {
    throw error;
  }
};

// Update Student
export const updateStudent = (id, student) => async (dispatch) => {
  try {
    const updatedStudent = await api.updateStudent(id, student);

    dispatch({
      type: UPDATE_STUDENT_SUCCESS,
      payload: updatedStudent
    });

    return updatedStudent;
  } catch (error) {
    throw error;
  }
};

// Delete Student
export const deleteStudent = (id) => async (dispatch) => {
  try {
    await api.deleteStudent(id);

    dispatch({
      type: DELETE_STUDENT_SUCCESS,
      payload: id
    });
  } catch (error) {
    throw error;
  }
};
