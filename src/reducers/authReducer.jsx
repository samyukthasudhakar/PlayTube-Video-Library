export default function AuthReducer(state, action){
    
    switch(action.type){
        case ('LOG_IN'):
            const {email: userEmail, token: userToken} = action.payload
            return {isLoggedIn:true, email: userEmail, token: userToken}
        case ('LOG_OUT'):
            return {isLoggedIn:false, email: '', token: ''}
    }
}