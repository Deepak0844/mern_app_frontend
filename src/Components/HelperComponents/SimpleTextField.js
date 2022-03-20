import "../DeskTopForm/DeskTopForm.css";
import "../MobileForm/MobileForm.css";
import { TextField } from "@mui/material";
import React from "react";

export function SimpleTextField(props) {
  const {
    handleChange,
    values,
    errors,
    touched,
    handleBlur,
    className,
    id,
    title,
    placeholder,
  } = props;
  return (
    <div className={className}>
      <span>{title}</span>
      <TextField
        onChange={handleChange}
        value={values}
        placeholder={placeholder}
        id={id}
        variant="outlined"
        error={errors && touched}
        helperText={errors && touched && errors}
        onBlur={handleBlur}
      />
    </div>
  );
}
