import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../css/VanDetail.css";
import { CircularLoadingIndicator } from "../../components/CircularLoadingIndicator";

export const VanDetail = () => {
    const { id } = useParams();
    const [van, setVan] = useState({});

    const fetchVan = async () => {
        if (!id) {
            throw new Error("Unable to retrieve ID");
        }
        try {
            const endpoint = process.env.REACT_APP_GET_VANS_ENDPOINT;
            const response = await fetch(`${endpoint}/${id}`);
            if (response.ok) {
                const vanData = await response.json();
                console.log(vanData);
                setVan(vanData);
            }
        } catch (err) {
            console.log("Some error occured", err);
        }
    };
    useEffect(() => {
        fetchVan();
    }, []);

    if (Object.keys(van).length === 0) {
        return <CircularLoadingIndicator />;
    }
    else return (
        <div className="van-detail--page">
            <div className="van-detail--back-btn">
            <Link to={"/vans"} >
                🡨 Back to all vans
            </Link>
            </div>
            <div className="van-detail--details">
                <img src={van.imageUrl} className="van-detail--img" />
                <div className="van-detail--info">

                    <h1 className="van-name">{van.name}</h1>
                    <div className={`van-card--type type-${van.type}`}>
                        {
                            van.type.charAt(0).toUpperCase() + van.type.slice(1)
                        }
                    </div>
                    <span className="van-detail--price">
                        <h2>${van.price}</h2>/day
                    </span>
                    <p className="van-detail--description">{van.description}</p>
                    <button className="van-detail--btn">Rent this van</button>
                </div>
            </div>

        </div>
    );


};
