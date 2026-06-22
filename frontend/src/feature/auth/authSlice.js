import {createSlice} from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        isAuthenicate: false,
        isLoading: true,
        isError:null
    },
    reducers: {
        // new user
        setAuthUser: (state, action) => {
            state.user = action.payload,
            state.isAuthenicate=true,
            state.isLoading = false,
            state.isError=null
        },
        // logout
        clearAuthUser: (state) => {
            state.user = null,
            state.isAuthenicate= false,
            state.isLoading=false
        },
        // loading state 
        setLoading: (state, action) => {
            state.isLoading=action.payload
        },
        // error handling
        setError: (state,action) => {
            state.isError = action.payload
            state.isAuthenicate=false
        },
        // clean error
        clearSetError: (state) => {
            state.isError=null
        }
    }
})

export const { setAuthUser, clearAuthUser, setLoading, setError, clearSetError } = authSlice.actions
export default authSlice.reducer