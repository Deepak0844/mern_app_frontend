import {
  Get_All_User,
  ADD_USER,
  UPDATE_USER,
  DELETE_USER,
  EDIT_USER_DATA,
} from "./action";

const initialValue = {
  users: [],
  singleUser: null,
};
const reducer = (state = initialValue, action) => {
  switch (action.type) {
    case Get_All_User:
      return {
        ...state,
        users: action.payload,
      };
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case UPDATE_USER:
      const index = state.users.findIndex(
        (user) => user._id === action.payload.id
      );
      const newUser = [...state.users];
      newUser[index] = action.payload.data;
      return {
        ...state,
        users: newUser,
      };
    case DELETE_USER:
      const users = state.users.filter((user) => user._id !== action.payload);
      return {
        ...state,
        users: users,
      };
    case EDIT_USER_DATA:
      return {
        ...state,
        singleUser: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
