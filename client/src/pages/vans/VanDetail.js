import { Link, useParams, useLocation, defer, Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import "../../css/VanDetail.css";
import { CircularLoadingIndicator } from "../../components/CircularLoadingIndicator";
import { fetchVan } from "../../api/vanApi";

export const vanDetailLoader = ({ params }) => {
    const { id } = params;
    return defer({
        van: fetchVan(id)
    });
}

export const VanDetail = () => {
    const loaderData = useLoaderData();
    const location = useLocation();
    const search = location.state?.search || "";
    const type = location.state?.type || "all";

    function renderVan(van) {
        return (
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
        )
    }

    return (
        <div className="van-detail--page">
            <div className="van-detail--back-btn">
                <Link
                    to={`..${search}`}
                    relative="path"
                >
                    🡨 Back to {type} vans
                </Link>
            </div>
            <Suspense fallback={<CircularLoadingIndicator />}>
                <Await resolve={loaderData.van}>
                    {renderVan}
                </Await>
            </Suspense>
        </div>
    );
};
