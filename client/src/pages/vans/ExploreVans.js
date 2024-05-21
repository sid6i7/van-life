import { useEffect, useRef, useState } from "react"
import { REQUEST_HEADERS } from "../../constants";
import { VanCard } from "./VanCard";
import "../../css/ExploreVans.css";

export const ExploreVans = () => {
    const [type, setType] = useState(null);
    const [vans, setVans] = useState([]);
    const [filteredVans, setFilteredVans] = useState([]);
    const firstRender = useRef(true);

    const fetchVans = async () => {
        const url = process.env.REACT_APP_GET_VANS_ENDPOINT;
        if(!url) {
            throw new Error("Could not retrive get vans endpoint");
        }
        try {
            const response = await fetch(
                url,
                {
                    headers: REQUEST_HEADERS
                }
            )
            if(response.ok) {
                const responseData = await response.json();
                console.log(responseData);
                setVans(responseData);
            }
        } catch(err) {
            console.log(`Some error occured ${err}`);
        }
    }

    useEffect(() => {
        if(firstRender) {
            fetchVans();
            firstRender.current = false;
        }
    }, [])

    return (
        <div className="explore-vans-page">
            <h1 className="explore-vans--title">Explore our van options</h1>
            <div className="explore-vans--filter-container">
                <button className="explore-vans--filter-btn">Simple</button>
                <button className="explore-vans--filter-btn">Luxury</button>
                <button className="explore-vans--filter-btn">Rugged</button>
                <span className="explore-vans--filter-clear">Clear Filters</span>
            </div>
            <div className="explore-vans--vans-container">
                {vans.map((van) => {
                    return <VanCard
                        key={van.id}
                        id={van.id}
                        name={van.name}
                        imageUrl={van.imageUrl}
                        price={van.price}
                        type={van.type}
                    />
                })}
            </div>
        </div>
    )
}