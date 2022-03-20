import "../DeskTopForm/DeskTopForm.css";
import "../MobileForm/MobileForm.css";
import React, { useState } from "react";
import {
  Avatar,
  styled,
  Box,
  CircularProgress,
  Typography,
} from "@mui/material";
import firebaseFileUpload from "../../Helper/firebase/firebaseFileUploader";

//profile
const Input = styled("input")({
  display: "none",
});

function Profile({
  image,
  setFieldValue,
  error,
  className,
  isMobile,
  errorClass,
}) {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  const fileUpload = (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      const file = e.target.files[0];
      firebaseFileUpload({
        //firebase file uplaoder-firsbase/index.js
        file,
        setFieldValue,
        setProgress,
        setLoading,
      });
    }
  };
  return (
    // <div>
    <>
      <div className={className}>
        {!isMobile && <span>Profile Pic</span>}
        <div>
          <ProgressBar loading={loading} progress={progress} />
          <label htmlFor="contained-button-file">
            <Avatar alt="" src={image} sx={{ width: 80, height: 80 }} />
          </label>
          <Input
            accept="image/*"
            id="contained-button-file"
            type="file"
            onChange={fileUpload}
          />
        </div>
      </div>
      <div>{error && <p className={errorClass}>image is required</p>}</div>
    </>
  );
}

function ProgressBar({ loading, progress }) {
  return (
    <div>
      {loading && (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            zIndex: "2",
          }}
        >
          <Box sx={{ position: "absolute" }}>
            <CircularProgress
              variant="determinate"
              color="secondary"
              value={progress}
              size={40}
            />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="caption"
                component="div"
                fontSize={13}
                color="WindowText"
              >
                {`${progress}%`}
              </Typography>
            </Box>
          </Box>
        </div>
      )}
    </div>
  );
}

export default Profile;
