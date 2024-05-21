import {NavLink, Outlet} from 'react-router-dom';
import "../../css/Host.css";

export const HostLayout = () => {
    const activePageStyle = {
        'fontWeight': 'bold',
        'textDecoration': 'underline',
        'color': '#161616'
    };

    return (
        <div>
            <nav className='host--navbar'>
            <NavLink
                to="/host"
                end
                style={({isActive}) => isActive ? activePageStyle : null}
                >Dashboard</NavLink>
            <NavLink
                to="/host/income"
                style={({isActive}) => isActive ? activePageStyle : null}
                >Income</NavLink>
            <NavLink
                to="/host/vans"
                style={({isActive}) => isActive ? activePageStyle : null}
                >Vans</NavLink>
            <NavLink 
                to="/host/reviews"
                style={({isActive}) => isActive ? activePageStyle : null}
                >Reviews</NavLink>
        </nav>
        <Outlet/>
        </div>
    )
}