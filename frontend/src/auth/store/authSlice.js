import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginApi, registerApi } from '../service/api.service';

export const loginUser = createAsyncThunk("auth/login", async ({ username, password }, { rejectWithValue }) => {
    try {
        const data = await loginApi({username,password})
        return data
    } catch (error) {
        return rejectWithValue(error?.error || error?.message || "Login Failed")
    }
})

export const registerUser = createAsyncThunk("auth/register", async ({ username, email, password },{rejectWithValue}) => {
    try {
        const data = await registerApi({ username, email, password })
        return data
    } catch (error) {
        return rejectWithValue(error?.error || error?.message || "Register Failed")
    }
})