import React from "react";
import PhoneInput from "react-phone-number-input";
import { formatPhoneNumberIntl } from "react-phone-number-input";

export function Mobile(props) {
  const {
    touched,
    errors,
    setFieldValue,
    values,
    handleBlur,
    className,
    errClassName,
  } = props;
  return (
    <>
      <div
        className={`${className} ${
          errors.mobileNo && touched.mobileNo && "errorPhoneInput"
        }`}
      >
        <span>Mobile</span>
        <PhoneInput
          defaultCountry="IN"
          placeholder="Ex: 987654321"
          value={values.mobileNo}
          onBlur={handleBlur}
          id="mobileNo"
          onChange={(value) =>
            setFieldValue("mobileNo", formatPhoneNumberIntl(value))
          }
        />
      </div>
      {errors.mobileNo && touched.mobileNo && (
        <div className={errClassName}>
          <p>{errors.mobileNo}</p>
        </div>
      )}
    </>
  );
}
