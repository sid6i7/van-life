import { redirect } from "react-router-dom";

export const setToken = (token) => {
    localStorage.setItem('token', token);
}

export const getToken = () => {
    return localStorage.getItem('token');
}

export const removeToken = () => {
    localStorage.removeItem('token');
}

export const isAuthenticated = () => {
    const token = getToken();
    return !!token;
}

export const requireAuth = (request=null) => {
    const isLoggedIn = isAuthenticated();
    const message = "You must log in first";
    let pathname = null;
    if(request) {
        pathname = new URL(request.url).pathname;
        if(!isLoggedIn) {
            const url = `/login?message=${message}&redirectTo=${pathname}`;
            throw redirect(url);
        }
    }
    return null;
}