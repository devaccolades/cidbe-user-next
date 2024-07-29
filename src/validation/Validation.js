import * as Yup from "yup";

export const EnquiryFomSchema = Yup.object({
    project_id: Yup.string().trim(),
    name: Yup.string().trim().required("Please enter your full name"),
    email: Yup.string().trim().email().required("Please enter your email address"),
    number: Yup.string().trim().required("Please enter your phone number") ,
    message: Yup.string().trim().min(4),
  });