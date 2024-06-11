import { useState } from "react";

function useToken(){
    const getToken = () => {
        const tokenStr = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenStr);
        return userToken;
    };
    const [token, setToken] = useState(getToken());
    
    const saveToken = (token) => {
        console.log(token);
        sessionStorage.setItem('token', JSON.stringify(token));
        setToken(token);
    };

    return {
        token: token,
        setToken: saveToken
    };
}

export default useToken;