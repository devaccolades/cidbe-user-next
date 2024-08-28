import * as Yup from "yup";

export const EnquiryFomSchema = Yup.object({
  project_id: Yup.string().trim(),
  name: Yup.string().trim().required("Please enter your full name"),
  email: Yup.string().trim().email().required("Please enter your email address"),
  number: Yup.string()
    .trim()
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Please enter your phone number"),
  message: Yup.string().trim(),
});