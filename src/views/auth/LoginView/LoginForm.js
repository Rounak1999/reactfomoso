import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { PATH_PAGE } from '~/routes/paths';
import axios from 'axios';
import { Form, FormikProvider } from 'formik';
import eyeFill from '@iconify-icons/eva/eye-fill';
import { Link as RouterLink } from 'react-router-dom';
import eyeOffFill from '@iconify-icons/eva/eye-off-fill';
import { passwordError, emailError } from '~/utils/firebaseShowError';
import {
  Box,
  Link,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel
} from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';

// ----------------------------------------------------------------------

LoginForm.propTypes = {
  formik: PropTypes.object.isRequired
};

function LoginForm({ formik }) {
  const [showPassword, setShowPassword] = useState(false);
  const {
    errors,
    touched,
    values,
    isSubmitting,
    handleSubmit,
    getFieldProps
  } = formik;

  const handleShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  const [email,set_email]=React.useState("")
  const [password,set_password]=React.useState("")

  const [ischeck,set_ischeck]=React.useState("")
  
  const submit = async ()=>{
    // window.location.href = "/app/dashboard"
    // let a = await axios.post("http://52.66.114.97:4000/admin/adminlogin",{
    //     email:email,
    //     password:password
    // })

    //  if(a.status==200){
    //      localStorage.setItem("admin",a.data.token)
    //      set_ischeck(a.data)
          
    //      // history.push("/notes")
    //  }else{
    //      alert(a.data)
    //  }
    // console.log("data after login",a)
}
const get_login=()=>{
  let login=localStorage.getItem("admin")
  set_ischeck(login)
  console.log("admin==>",login)
}


React.useEffect(()=>{
  get_login();
},[])



  return (
    
    <FormikProvider value={formik}>
    <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <TextField
        fullWidth
        type="email"
        label="Email address"
        {...getFieldProps('email')}
        error={
          Boolean(touched.email && errors.email) ||
          emailError(errors.afterSubmit).error
        }
        helperText={
          (touched.email && errors.email) ||
          emailError(errors.afterSubmit).helperText
        }
      />
      <Box sx={{ mb: 3 }} />
      <TextField
        fullWidth
        type={showPassword ? 'text' : 'password'}
        label="Password"
        {...getFieldProps('password')}
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <IconButton onClick={handleShowPassword} edge="end">
                <Icon icon={showPassword ? eyeFill : eyeOffFill} />
              </IconButton>
            </InputAdornment>
          )
        }}
        error={
          Boolean(touched.password && errors.password) ||
          passwordError(errors.afterSubmit).error
        }
        helperText={
          (touched.password && errors.password) ||
          passwordError(errors.afterSubmit).helperText
        }
      />
      <Box
        sx={{
          my: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              {...getFieldProps('remember')}
              checked={values.remember}
            />
          }
          label="Remember me"
        />

        <Link
          variant="subtitle2"
          to={PATH_PAGE.auth.resetPassword}
          component={RouterLink}
        >
          Forgot password?
        </Link>
      </Box>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        pending={isSubmitting}
      >
        Login
      </LoadingButton>
    </Form>
  </FormikProvider>

  );
}

export default LoginForm;
