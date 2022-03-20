import { TextField } from "@mui/material";
import React from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

export function Dob(props) {
  const {
    handleBlur,
    setFieldValue,
    values,
    errors,
    touched,
    className,
    errClassName,
  } = props;

  return (
    <>
      <div className={className}>
        <span>DOB</span>

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            onBlur={handleBlur}
            placeholder="hello"
            disableFuture
            onChange={(newValue) => {
              setFieldValue("Dob", newValue);
            }}
            name="Dob"
            value={values.Dob}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </div>
      {errors.Dob && touched.Dob && (
        <div className={errClassName}>
          <p>{errors.Dob}</p>
        </div>
      )}
    </>
  );
}
