import {createContext, useContext, useReducer} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import AuthReducer from 'reducers/authReducer'
import { LOGIN_API, SIGNUP_API } from 'utils/constants/apiEndPoints'

const authContext = createContext(null)

function AuthProvider( {children}){

    const navigateTo = useNavigate()
    const [authState, authDispatch] = useReducer(AuthReducer,{isLoggedIn:false, email:'',token:''})

    const loginHandler = async (e, user) => {
        e.preventDefault()
        try {
          const response = await axios.post(LOGIN_API, {
            email: user.email,
            password: user.password,
          });
          authDispatch({type:'LOG_IN',payload:{email: user.email,token:response.data.encodedToken}})
          navigateTo(-1)
        } catch (error) {
            console.log(error)
          alert("Please enter valid email and password.")
        }
    };

    const signupHandler = async (e, user) => {
        e.preventDefault()
        try{
          const response = await axios.post(SIGNUP_API, {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password,
          });
          authDispatch({type:'LOG_IN',payload:{email: user.email,token:response.data.encodedToken}})
          navigateTo(-1)
        }catch (error) {
          console.log(error);
        }
    };

    return (
    <authContext.Provider value={{authState, authDispatch, signupHandler, loginHandler}}>
        { children }
    </authContext.Provider>
    )

}

const useAuth = () => useContext(authContext)

export { AuthProvider, useAuth }