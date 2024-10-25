import * as Yup from 'yup';

export const AddStudentSchema = Yup.object({
    fName: Yup.string().required('First Name is required'),
    lName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    contact: Yup.number().required('Contact number is required'),
    gender: Yup.string().required('Gender is required'),
    dob: Yup.date().required('Date of Birth is required'),
    maritalStatus: Yup.string().required('Marital Status is required'),
    firstLanguage: Yup.string().required('First Language is required'),
    country: Yup.string().required('Country is required'),
  });