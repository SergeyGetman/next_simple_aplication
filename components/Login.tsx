import React, { useCallback, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { FormControl, Paper } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { addDataUser, changeStopAvtorized } from '../store/slice';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import { RootState } from '../store/store';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IEvent, SyntheticEvent } from '../types/generalType';

export const Login = () => {
  const paperStyle = {
    padding: 20,
    height: '30vh',
    width: 480,
    margin: '25% auto',
  };
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const btnstyle = { margin: '30px 0' };

  const [formData, setFormData] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const router = useRouter();

  const { dataAvtorized } = useTypedSelector((state) => state || []);

  const handleChangeEmail = (event: IEvent) => {
    const { value } = event.target;
    setFormData(() => ({
      ...formData,
      email: value,
    }));
  };

  const handleChangePass = (event: IEvent) => {
    const { value } = event.target;
    setFormData(() => ({
      ...formData,
      password: value,
    }));
  };

  const checkFormData = useCallback(() => {
    if (!!dataAvtorized?.email || !!dataAvtorized.password) {
      router.push('/').then((r) => r);
    }
  }, [dataAvtorized]);

  const handleSubmit = (event: IEvent) => {
    event.preventDefault();
    dispatch(addDataUser(formData, event));
    dispatch(changeStopAvtorized(false, event));
    checkFormData();
  };

  return (
    <>
      <Box className="form-control">
        <form onSubmit={() => handleSubmit}>
          <FormControl>
            <Grid>
              <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                  <Avatar style={avatarStyle}>
                    <AccountCircleIcon />
                  </Avatar>
                  <h2>Sign In</h2>
                </Grid>
                <TextField
                  sx={{ margin: '5px' }}
                  label="Username"
                  placeholder="Enter username"
                  variant="outlined"
                  fullWidth
                  required
                  value={formData.email}
                  onChange={() => handleChangeEmail}
                />
                <TextField
                  sx={{ margin: '5px' }}
                  placeholder="Enter password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  required
                  value={formData.password}
                  onChange={() => handleChangePass}
                />
                <FormControlLabel
                  control={<Checkbox name="checkedB" color="primary" />}
                  label="Remember me"
                />
                <Button type="submit" color="primary" variant="contained" style={btnstyle} fullWidth>
                  Sign in
                </Button>
                <Typography>
                  <Link href="#">Forgot password ?</Link>
                </Typography>
                <Typography>
                  Do you have an account ?<Link href="/login">Sign Up</Link>
                </Typography>
              </Paper>
            </Grid>
          </FormControl>
        </form>
      </Box>
    </>
  );
};

export default Login;
