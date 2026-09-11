import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
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

const initialState = {
  user: null,
  loading: false,
  error: null,
  success: false,
  isAuthenticated:false
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    logout: (state) => {
      state.user = null;
      state.error = null;
      state.success = false;
      isAuthenticated = false;
    },

    clearAuthError: (state) => {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    // LOGIN
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })

      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.user = action.payload?.user || null;
        state.isAuthenticated = true;
      })

      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login Failed";
        state.success = false;
      });

    // REGISTER
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })

      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.user = action.payload?.user || null;
        state.isAuthenticated=true
      })

      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Register Failed";
        state.success = false;
      });
  },
});

export const { logout, clearAuthError } = authSlice.actions;

export default authSlice.reducer;