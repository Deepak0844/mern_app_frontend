import "../DeskTopForm/DeskTopForm.css";
import "../MobileForm/MobileForm.css";
import React from "react";

export function JobType(props) {
  const { setFieldValue, values, errors, touched, className, errClassName } =
    props;
  //job
  const JobArray = [
    { type: "FT", value: "Full Time" },
    { type: "PT", value: "Part Time" },
    { type: "Consultant", value: "Consultant" },
  ];

  return (
    <>
      <div className={className}>
        <span>Job Type</span>
        <div className="jobBtn">
          {JobArray.map((job) => (
            <label
              key={job.type}
              className={`checkbox ${
                errors.jobType && touched?.jobType && "errorJobType"
              }`}
              style={{
                background: job.value === values.jobType ? "#4fa1e7" : "",
              }}
            >
              {job.type}
              <input
                style={{ display: "none" }}
                id={job.value}
                name="jobType"
                value={values.jobType}
                onChange={(e) => setFieldValue("jobType", e.target.id)}
                type="checkbox"
              />
            </label>
          ))}
        </div>
      </div>
      {errors.jobType && touched?.jobType && (
        <div className={errClassName}>
          {" "}
          <p>{errors.jobType}</p>
        </div>
      )}
    </>
  );
}
