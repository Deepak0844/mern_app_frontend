import { Delete, Edit } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import React from "react";
import "./UserDetails.css";
import { useHistory } from "react-router-dom";
import { deleteUser } from "../../API/ApiRequest";
import { useDispatch } from "react-redux";
import { delete_user } from "../../redux/action";
import { DateFormater } from "../../Helper/dateHelper";

function UserDetails({ user }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { email, mobileNo, Dob, jobType, _id, profilePic } = user;

  const handleDeleteUser = async (userId) => {
    const result = await deleteUser(userId);
    dispatch(delete_user(userId));
  };
  return (
    <section className="userDetailsContainer">
      <div className="userDetails_left">
        <h5>{email}</h5>
        <h5>{mobileNo}</h5>
        <h5>{DateFormater(Dob)}</h5>
        <h5>{jobType}</h5>
      </div>
      <div className="userDetails_right">
        <Avatar
          alt="Remy Sharp"
          src={profilePic}
          sx={{ width: 56, height: 56 }}
        />
        <div className="actionBtn">
          <IconButton
            onClick={() => history.push(`/edit-user/${_id}`)}
            color="secondary"
          >
            <Edit />
          </IconButton>
          <IconButton onClick={() => handleDeleteUser(_id)} color="error">
            <Delete />
          </IconButton>
        </div>
      </div>
    </section>
  );
}

export default UserDetails;
