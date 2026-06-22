import {useDispatch, useSelector} from "react-redux"
import { setLoading,setAuthUser,clearAuthUser,setError,clearSetError } from "../authSlice.js"
import { registerApi,loginApi,getUserApi,logoutApi } from "../service/authApi.service.js"

export const useAuth = () => {
    const dispatch = useDispatch()

    const {user,isAuthenicate,isLoading,isError} = useSelector((state)=>state.auth)

    const handleRegister =async (formData) => {
        try {
            dispatch(setLoading(true))
            dispatch(clearSetError())

            const response = await registerApi(formData)
            dispatch(setAuthUser(response.user))
        }
        catch (error) {
            dispatch(setError(error))
        }
        finally {
            dispatch(setLoading(false))
        }
    }

    const handLogin =async (formData) => {
        try {
            dispatch(setLoading(true))
            dispatch(clearSetError())

            const response = await loginApi(formData)
            dispatch(setAuthUser(response.user))
        }
        catch (error) {
            dispatch(setError(error))
        }
        finally {
            dispatch(setLoading(false))
        }
    }

    const handleGetUser = async () => {
        try {
            dispatch(setLoading(true))
            dispatch(clearSetError())

            const response = await getUserApi()
            dispatch(setAuthUser(response.user))
        }
        catch (error) {
            dispatch(setError(error))
        }
        finally {
            dispatch(setLoading(false))
        }
    }

    const handleLogoutUser = async () => {
        try {
            dispatch(setLoading(true))
            dispatch(clearSetError())

            const response = await logoutApi()
            dispatch(clearAuthUser(response.user))
        }
        catch (error) {
            dispatch(setError(error))
        }
        finally {
            dispatch(setLoading(false))
        }
    }

    return { handleRegister, handLogin, handleGetUser, handleLogoutUser,user,isAuthenicate,isLoading,isError }
}