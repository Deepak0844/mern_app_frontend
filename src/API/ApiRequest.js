import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = "https://backendmernapp.herokuapp.com";

const serviceRequest = axios.create({
  baseURL: BASE_URL,
});

export const getUsers = async () => {
  const { data, status } = await serviceRequest.get("/user");
  if (status === 200) {
    return data;
  } else {
    console.error("error");
  }
};

export const deleteUser = async (id) => {
  const { data, status } = await serviceRequest.delete(`/user/${id}`);
  if (status === 200) {
    toast.success(data.message);
    return data;
  } else {
    console.error("error");
  }
};

export const addUser = async (userObj, resetForm) => {
  const { data, status } = await serviceRequest.post(`/user`, userObj);
  if (status === 200) {
    toast.success("User added successfully");
    resetForm();
    return data;
  }
};

export const editUser = async (id, userObj, resetForm) => {
  const { data, status } = await serviceRequest.put(`/user/${id}`, userObj);
  if (status === 200) {
    toast.success("User updated successfully");
    resetForm();
    return data;
  } else {
    console.error("error");
  }
};
