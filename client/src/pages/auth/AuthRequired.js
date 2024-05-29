import { isAuthenticated } from "../../utils/auth"
import {Navigate, Outlet} from 'react-router-dom';

export const AuthRequired = () => {

    const authenticated = isAuthenticated();

    if(authenticated) {
        return <Outlet/>
    }
    else {
        return <Navigate to={"/login"}/>
    }

}