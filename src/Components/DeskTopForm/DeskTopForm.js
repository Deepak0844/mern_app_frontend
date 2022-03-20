import { Button } from "@mui/material";
import React from "react";
import "./DeskTopForm.css";
import "react-phone-number-input/style.css";
import Profile from "../HelperComponents/Profile";
import { JobType } from "../HelperComponents/JobType";
import { Formik } from "../../Helper/ValidationHelper";
import { SimpleTextField } from "../HelperComponents/SimpleTextField";
import { Mobile } from "../HelperComponents/Mobile";
import { PrefLocation } from "../HelperComponents/PrefLocation";
import { Dob } from "../HelperComponents/Dob";
//

function DeskTopForm() {
  //validation
  const formik = Formik();

  const {
    handleSubmit,
    values,
    handleChange,
    handleBlur,
    errors,
    touched,
    setFieldValue,
  } = formik;

  return (
    <section className="formWrapper">
      <form className="formContainer" onSubmit={handleSubmit}>
        <fieldset className="fieldSet">
          <legend>
            <b>Registration</b>
          </legend>
          <div className="inputContainer_left">
            <SimpleTextField
              handleChange={handleChange}
              values={values.name}
              errors={errors.name}
              touched={touched.name}
              handleBlur={handleBlur}
              className="field"
              id="name"
              title="Fullname"
              placeholder="deepak"
            />
            <JobType
              errors={errors}
              touched={touched}
              values={values}
              setFieldValue={setFieldValue}
              className="field jobType"
              errClassName="errorMessage"
            />
            <Mobile
              touched={touched}
              errors={errors}
              setFieldValue={setFieldValue}
              values={values}
              handleBlur={handleBlur}
              className="field"
              errClassName="errorMessage"
            />
            <PrefLocation
              handleChange={handleChange}
              values={values}
              className="field"
              optionalTextClass="optionalText"
            />
          </div>
          <div className="inputContainer_right">
            <Profile
              image={values.profilePic}
              setFieldValue={setFieldValue}
              error={errors.profilePic && touched.profilePic}
              className="field profile"
              errorClass="profilePicError"
            />
            <SimpleTextField
              handleChange={handleChange}
              values={values.email}
              errors={errors.email}
              touched={touched.email}
              handleBlur={handleBlur}
              className="field"
              id="email"
              title="Email"
              placeholder="example@gmail.com"
            />
            <Dob
              handleBlur={handleBlur}
              setFieldValue={setFieldValue}
              values={values}
              errors={errors}
              touched={touched}
              className="field"
              errClassName="errorMessage"
            />
            <div className="button">
              <Button type="submit">+ Add / Update</Button>
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  );
}

export default DeskTopForm;
