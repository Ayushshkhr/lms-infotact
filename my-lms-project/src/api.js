const API_URL = "http://localhost:5173/api";

export const getCourses = async () => {
  const response = await fetch(`${API_URL}/courses`);
  return response.json();
};
