import { Form, Field } from 'react-final-form';
import { useDispatch } from 'react-redux';
import { loginUser } from './authSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, IconButton, Alert } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import logo from '../../assets/rozetkaLogo.svg';

const required = (value) => (value ? undefined : 'Обязательное поле');

export default function LoginPage() {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const onSubmit = async (values) => {
        setError(null);
        try {
            const result = await dispatch(loginUser({ login: values.login, password: values.password })).unwrap();
            console.log('✅ Login successful:', result);
            setTimeout(() => navigate('/'), 100); // небольшая задержка для гарантии сохранения в Redux
        } catch (err) {
            console.error('❌ Login failed:', err);
            setError(err?.message || err || 'Login failed');
        }
    };
  
    return (
        <div style={{ maxWidth: 400, margin: '200px auto', padding: 50, backgroundColor: '#f4fcfb', textAlign: 'center'}}>
            <img
                src={logo}
                alt="Rozetka logo"
                style={{ width: 320, marginBottom: 40 }}
            />
            
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit, valid, submitting }) => (
                    <form onSubmit={handleSubmit}>
                        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
                        <Field name="login" validate={required}>
                            {({ input, meta }) => (
                            <TextField
                                {...input}
                                label="Login"
                                fullWidth
                                margin="normal"
                                error={meta.touched && meta.error}
                                helperText={meta.touched && meta.error}
                            />
                            )}
                        </Field>
                        <Field name="password" validate={required}>
                            {({ input, meta }) => (
                                <TextField
                                    {...input}
                                    label="Password"
                                    type={show ? 'text' : 'password'}
                                    fullWidth
                                    margin="normal"
                                    error={meta.touched && meta.error}
                                    helperText={meta.touched && meta.error}
                                    InputProps={{
                                    endAdornment: (
                                        <IconButton onClick={() => setShow(!show)}>
                                        {show ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    ),
                                    }}
                                />
                            )}
                        </Field>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            disabled={!valid || submitting}
                            style={{ marginTop: 20, height: 60, backgroundColor: '#1fce53', color: '#000' }}
                        >
                            {submitting ? 'Loading...' : 'Login'}
                        </Button>

                    </form>
                )}
            />
        </div>
    );
}