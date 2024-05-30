import { getToken } from '../utils/auth';

const { REQUEST_HEADERS } = require('../constants');

export const login = async (email, password) => {
    const endpoint = process.env.REACT_APP_AUTH_ENDPOINT;
    const url = `${endpoint}/login`;
    try {
        const response = await fetch(
            url,
            {
                method: 'POST',
                body: JSON.stringify({
                    email,
                    password
                }),
                headers: REQUEST_HEADERS
            }
        );
        if (response.ok) {
            const responseData = await response.json();
            localStorage.setItem('token', responseData.token);
        } else {
            const responseData = await response.json();
            throw {
                message: responseData.message,
                statusText: response.statusText,
                status: responseData.status
            };
        }
    } catch(error) {
        throw error;
    }
}

export const getUser = async () => {
    let token = getToken();
    // console.log(token);
    if(!token) {
        return null;
    }
    try {
        const endpoint = process.env.REACT_APP_AUTH_ENDPOINT;
        const url = `${endpoint}/get_user`;
        const response = await fetch(
            url,
            {
                method: 'POST',
                headers: {
                    ...REQUEST_HEADERS,
                    Authorization: `Bearer ${token}`
                }
            }
        )
        if(response.ok) {
            const user = await response.json();
            // console.log('works')
            return user;
        }
    }  catch(err) {
        throw err;
    }
}