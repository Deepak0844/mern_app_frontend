import React from "react";
import "./MobileForm.css";
import { Button } from "@mui/material";
import { JobType } from "../HelperComponents/JobType";
import { SimpleTextField } from "../HelperComponents/SimpleTextField";
import { Mobile } from "../HelperComponents/Mobile";
import { PrefLocation } from "../HelperComponents/PrefLocation";
import { Dob } from "../HelperComponents/Dob";
import Profile from "../HelperComponents/Profile";
import { Formik } from "../../Helper/ValidationHelper";
import { useParams } from "react-router-dom";

function MobileForm() {
  const { id } = useParams();
  const isEditPage = window.location.pathname.includes("edit-user");
  const isMobile = true;
  const formik = Formik(id, isEditPage, isMobile);
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
    <section className="mobileFieldWrapper">
      <form onSubmit={handleSubmit}>
        <fieldset className="mobileFieldContainer">
          <legend>
            <b>Registration</b>
          </legend>
          <Profile
            image={values.profilePic}
            setFieldValue={setFieldValue}
            error={errors.profilePic && touched.profilePic}
            className="profileMobileField"
            isMobile={true}
            errorClass="profilePicErrorMobile"
          />
          <SimpleTextField
            handleChange={handleChange}
            values={values.name}
            errors={errors.name}
            touched={touched.name}
            handleBlur={handleBlur}
            className="mobileField"
            id="name"
            title="Fullname"
            placeholder="deepak"
          />
          <Mobile
            touched={touched}
            errors={errors}
            setFieldValue={setFieldValue}
            values={values}
            handleBlur={handleBlur}
            className="phoneMobileField"
            errClassName="mobileErrorMessage"
          />
          <JobType
            errors={errors}
            touched={touched}
            values={values}
            setFieldValue={setFieldValue}
            className="jobTypeMobileField"
            errClassName="mobileErrorMessage"
          />
          <PrefLocation
            handleChange={handleChange}
            values={values}
            className="mobileField"
            optionalTextClass="mobileOptionalText"
          />
          <SimpleTextField
            handleChange={handleChange}
            values={values.email}
            errors={errors.email}
            touched={touched.email}
            handleBlur={handleBlur}
            className="mobileField"
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
            className="mobileField"
            errClassName="mobileErrorMessage"
          />
          <div className="mobileSubmitBtn">
            <Button variant="contained" color="success" type="submit">
              {isEditPage ? "Edit" : "Add"}
            </Button>
          </div>
        </fieldset>
      </form>
    </section>
  );
}

export default MobileForm;
