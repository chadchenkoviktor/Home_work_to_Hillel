import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/axios';


export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({ login, password }, { rejectWithValue }) => {
        try {
            const response = await api.post('/login', { login, password });
            // Expecting { token } in response.data
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response?.data || err.message);
        }
    }
);

const initialState = {
    isAuth: !!localStorage.getItem('token'),
    token: localStorage.getItem('token') || null,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {
            localStorage.removeItem('token');
            state.isAuth = false;
            state.token = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                const token = action.payload?.token || action.payload;
                if (token) {
                    localStorage.setItem('token', token);
                    state.isAuth = true;
                    state.token = token;
                }
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error?.message;
            });
    },
});


export const { logout } = authSlice.actions;
export default authSlice.reducer;