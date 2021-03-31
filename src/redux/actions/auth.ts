import axios from "axios";

export function auth(email: any, password: any, isLogin: any) {
    return async (dispatch: any) => {
        const authData = {
            email, password,
            returnSecureToken: true
        }
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAPwJZ37KJ1j_dgSa_LJryFhD9H2U7eB84'
        if (isLogin) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAPwJZ37KJ1j_dgSa_LJryFhD9H2U7eB84'
        }
        const response = await axios.post(url, authData)
        const data = response.data

        const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000)

        localStorage.setItem('token', data.idToken)
        localStorage.setItem('userId', data.localId)
        //@ts-ignore
        localStorage.setItem('expirationDate', expirationDate)

        dispatch(authSuccess(data.idToken))
        dispatch(autoLogout(data.expiresIn))
    }
}

export function autoLogout(time:number){
    return (dispatch:any) => {
        setTimeout(() => {
            dispatch(logout())
        }, time * 1000)
    }
}

export function logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    //@ts-ignore
    localStorage.removeItem('expirationDate')
    return{
        type:"AUTH_LOGOUT"
    }
}

export function authSuccess(token:any){
    return{
        type: "AUTH_SUCCESS",
        token
    }
}