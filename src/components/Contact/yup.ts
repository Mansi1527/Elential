import * as yup from "yup";

export const Schema = yup.object().shape({
    websiteFor: yup.string().oneOf(["self", "company"], "Please select an option").required("This field is required"),
    companyName: yup.string().when("websiteFor", {
        is: "company",
        then: (schema) => schema.required("Company name is required"),
        otherwise: (schema) => schema.notRequired()
    }),
    companySize: yup.string().when("websiteFor", {
        is: "company",
        then: (schema) => schema.required("Company size is required"),
        otherwise: (schema) => schema.notRequired()
    }),
    companyType: yup.string().when("websiteFor", {
        is: "company",
        then: (schema) => schema.required("Company type is required"),
        otherwise: (schema) => schema.notRequired()
    }),
    websiteType: yup
    .string()
    .oneOf(["Static", "Dynamic"], "Please select a valid website type")
    .required("Website type is required"),
    budget: yup
        .number()
        .typeError("Budget must be a number")
        .positive("Budget must be a positive number")
        .min(1000, "Budget must be more than 1000")
        .required("Budget is required"),
    contactNumber: yup
        .string()
        .matches(/^\d{10}$/, "Contact number must be exactly 10 digits")
        .required("Primary contact number is required"),
    country: yup.string().required("Country is required"),
    representativeName: yup
        .string()
        .matches(/^[a-zA-Z ]*$/, "Representative name must contain only alphabets")
        .min(3, "Representative name must be at least 3 characters long")
        .required("Representative name is required"),
});
