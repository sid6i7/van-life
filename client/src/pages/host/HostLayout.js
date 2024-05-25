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
                to="."
                end
                style={({isActive}) => isActive ? activePageStyle : null}
                >Dashboard</NavLink>
            <NavLink
                to="income"
                style={({isActive}) => isActive ? activePageStyle : null}
                >Income</NavLink>
            <NavLink
                to="vans"
                style={({isActive}) => isActive ? activePageStyle : null}
                >Vans</NavLink>
            <NavLink 
                to="reviews"
                style={({isActive}) => isActive ? activePageStyle : null}
                >Reviews</NavLink>
        </nav>
        <Outlet/>
        </div>
    )
}