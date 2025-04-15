import * as Yup from "yup";
export const resourceSchema = Yup.object({
  title: Yup.string().required("Please enter title"),
  description: Yup.string().required("Please enter descripion"),
  icon: Yup.string().required("Please select icon"),
  photo: Yup.string().required("Please select photo"),
});

export const typesSchema = Yup.object({
  name: Yup.string().required("Please enter name"),
  description: Yup.string().required("Please enter descripion"),
});

export const partnersSchema = Yup.object({
  photo: Yup.string().required("Please enter photo"),
  key: Yup.string().required("Please enter key"),
  description: Yup.string().required("Please enter descripion"),
});

export const managementSchema = Yup.object({
  name: Yup.string().required("Please enter name"),
  role: Yup.string().required("Please enter role"),
  linkedin: Yup.string().required("Please enter linkedin"),
  twitter: Yup.string().required("Please enter twitter"),
  photo: Yup.string().required("Please enter photo"),
});
