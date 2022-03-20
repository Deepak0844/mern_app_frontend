import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { add_user, update_user } from "../redux/action";
import { addUser, editUser, serviceRequest } from "../API/ApiRequest";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

export function Formik(id, isEditPage, isMobile) {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const history = useHistory();
  const userById = users.find((user) => user?._id === id);

  const userData = {
    name: "",
    email: "",
    profilePic: "",
    mobileNo: "",
    Dob: new Date(),
    jobType: "",
    prefLocation: [],
  };

  const editData = {
    name: userById?.name,
    email: userById?.email,
    profilePic: userById?.profilePic,
    mobileNo: userById?.mobileNo,
    Dob: userById?.Dob,
    jobType: userById?.jobType,
    prefLocation: userById?.prefLocation,
  };
  const initialUser = userById && id ? editData : userData;
  const {
    handleSubmit,
    values,
    handleChange,
    handleBlur,
    errors,
    touched,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: initialUser,

    validationSchema: formValidationSchema,
    onSubmit: async (data) => {
      if (isEditPage) {
        const result = await editUser(id, data, resetForm);
        dispatch(update_user(id, result));
        if (isMobile) {
          history.push("/");
        }
      } else {
        const result = await addUser(data, resetForm);
        dispatch(add_user(result));
        if (isMobile) {
          history.push("/");
        }
      }
    },
  });
  const formikFn = {
    handleSubmit,
    values,
    handleChange,
    handleBlur,
    errors,
    touched,
    setFieldValue,
  };
  return formikFn;
}

// validation schema
const formValidationSchema = yup.object({
  name: yup
    .string()
    .min(3, "Need bigger user name")
    .required("name is required"),
  email: yup
    .string()
    .email("please provide valid email")
    .required("email is required"),
  jobType: yup.string().required("job type is required"),
  mobileNo: yup.string().required("mobile no is required"),
  profilePic: yup.string().required("profile pic is required"),
  Dob: yup.date().required("date is required"),
});
