import { Link, useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../css/VanDetail.css";
import { CircularLoadingIndicator } from "../../components/CircularLoadingIndicator";
import { fetchVan } from "../../api/vanApi";

export const VanDetail = () => {
    const { id } = useParams();
    const [van, setVan] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const location = useLocation();
    const search = location.state?.search || "";
    const type = location.state?.type || "all";

    
    useEffect(() => {
        const fetchVanData = async () => {
            setLoading(true);
            const vanData = await fetchVan(id);
            setVan(vanData);
        }
        try {
            fetchVanData();
        } catch(err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }, []);

    if (loading) {
        return <CircularLoadingIndicator />;
    }
    else return (
        <div className="van-detail--page">
            <div className="van-detail--back-btn">
            <Link
                to={`..${search}`}
                relative="path"
            >
                🡨 Back to {type} vans
            </Link>
            </div>
            {
                van && <div className="van-detail--details">
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
            }

        </div>
    );


};
