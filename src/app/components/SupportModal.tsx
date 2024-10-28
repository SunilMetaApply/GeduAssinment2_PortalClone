import React from 'react';
import { Box, Button, Grid, Modal, TextField, Typography, Select, MenuItem } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Formik, Form } from 'formik';
import { AddStudentSchema } from '../ValidationSchema'; 
import { AddStudent } from '../Interface'; 
import { AddStudentInitialValues } from '../InitialValues';
import Autocomplete from '@mui/material/Autocomplete';
import { useRouter } from 'next/navigation';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '90%',
  width: "100%",
  bgcolor: 'background.paper',
  border: '1px solid #000',
  borderRadius: '5px',
  boxShadow: 24,
};

const genderOptions = ['Male', 'Female', 'Other'];
const maritalStatusOptions = ['Single', 'Married', 'Divorced', 'Widowed'];
const countries = ['United States', 'Canada', 'United Kingdom', 'Australia', 'India'];

interface AddNewStudentModalProps {
  openModal: boolean;
  handleClose: () => void;
}

const SupportModal: React.FC<AddNewStudentModalProps> = ({ openModal, handleClose }) => {
  const router = useRouter()
  const handleSubmit = (values: AddStudent, { resetForm }: any) => {
    console.log(values);
    resetForm();
    handleClose();
    router.push("/students")
  };

  return (
    <Modal open={openModal} onClose={handleClose}>
      <Box sx={style}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '.7em 2em', background: '#f7f7f7', borderRadius: '5px 5px 0px 0px' }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Student
          </Typography>
          <Button onClick={handleClose}>
            <CloseIcon />
          </Button>
        </Box>
        <Formik<AddStudent>
          initialValues={AddStudentInitialValues}
          validationSchema={AddStudentSchema}
          onSubmit={handleSubmit}
        >
          {({ handleChange, handleBlur, values, touched, errors, resetForm }) => (
            <Form>
              <Box sx={{ padding: '1em 2em', maxHeight: '600px', overflowY: 'auto' }}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <label>First Name</label>
                    <TextField
                      fullWidth
                      size='small'
                      placeholder='First Name'
                      name="fName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.fName}
                      error={touched.fName && Boolean(errors.fName)} 
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <label>Last Name</label>
                    <TextField
                      fullWidth
                      size='small'
                      placeholder='Last Name'
                      name="lName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lName}
                      error={touched.lName && Boolean(errors.lName)} 
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <label>Email</label>
                    <TextField
                      fullWidth
                      size='small'
                      placeholder='Email'
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      error={touched.email && Boolean(errors.email)} 
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <label>Alternate Email</label>
                    <TextField
                      fullWidth
                      size='small'
                      placeholder='Alternate Email'
                      name="alternateEmail"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.alternateEmail}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <label>Contact Number</label>
                    <TextField
                      fullWidth
                      size='small'
                      placeholder='Contact Number'
                      name="contact"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.contact}
                      type="tel"
                      error={touched.contact && Boolean(errors.contact)} 
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <label>Gender</label>
                    <Select
                      fullWidth
                      size='small'
                      name="gender"
                      value={values.gender}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.gender && Boolean(errors.gender)} 
                    >
                      {genderOptions.map((option) => (
                        <MenuItem key={option} value={option}>{option}</MenuItem>
                      ))}
                    </Select>
                  </Grid>
                  <Grid item xs={6}>
                    <label>Date of Birth</label>
                    <TextField
                      fullWidth
                      size='small'
                      placeholder='Date of Birth'
                      name="dob"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.dob}
                      type="date"
                      error={touched.dob && Boolean(errors.dob)} 
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <label>Marital Status</label>
                    <Select
                      fullWidth
                      size='small'
                      placeholder='Marital Status'
                      name="maritalStatus"
                      value={values.maritalStatus}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.maritalStatus && Boolean(errors.maritalStatus)} 
                    >
                      {maritalStatusOptions.map((option) => (
                        <MenuItem key={option} value={option}>{option}</MenuItem>
                      ))}
                    </Select>
                  </Grid>
                  <Grid item xs={6}>
                    <label>First Language</label>
                    <TextField
                      fullWidth
                      size='small'
                      placeholder='First Language'
                      name="firstLanguage"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstLanguage}
                      error={touched.firstLanguage && Boolean(errors.firstLanguage)} 
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <label>Country</label>
                    <Autocomplete
                      options={countries}
                      getOptionLabel={(option) => option}
                      value={values.country}
                      onChange={(event, newValue) => handleChange({ target: { name: 'country', value: newValue } })}
                      onBlur={handleBlur}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          size='small'
                          placeholder='Country'
                          error={touched.country && Boolean(errors.country)}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <label>Passport Number</label>
                    <TextField
                      fullWidth
                      size='small'
                      placeholder='Passport Number'
                      name="passportNumber"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.passportNumber}
                      error={touched.passportNumber && Boolean(errors.passportNumber)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <label>Passport Expiry Date</label>
                    <TextField
                      fullWidth
                      size='small'
                      placeholder='Passport Expiry Date'
                      name="passportExpDate"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.passportExpDate}
                      type="date"
                      error={touched.passportExpDate && Boolean(errors.passportExpDate)}
                    />
                  </Grid>
                </Grid>
                <Grid container sx={{paddingTop:'1em', display:'flex', gap:'1em'}}>
                  <Button type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                  <Button onClick={() => { resetForm() }} variant="outlined" color="secondary">
                    Clear
                  </Button>
                </Grid>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
};

export default SupportModal;
