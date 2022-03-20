export const Get_All_User = "Get_All_User";
export const ADD_USER = "ADD_USER";
export const UPDATE_USER = "UPDATE_USER";
export const DELETE_USER = "DELETE_USER";
export const EDIT_USER_DATA = "EDIT_USER_DATA";
export const get_all_user = (data) => {
  return {
    type: "Get_All_User",
    payload: data,
  };
};
export const add_user = (data) => {
  return {
    type: "ADD_USER",
    payload: data,
  };
};
export const update_user = (id, data) => {
  return {
    type: "UPDATE_USER",
    payload: { id, data },
  };
};
export const delete_user = (id) => {
  return {
    type: "DELETE_USER",
    payload: id,
  };
};
export const edit_user_data = (data) => {
  return {
    type: "EDIT_USER_DATA",
    payload: data,
  };
};
