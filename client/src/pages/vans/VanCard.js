import { Link, useSearchParams } from "react-router-dom";
import "../../css/VanCard.css";

export const VanCard = ({ id, name, price, imageUrl, type }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get('type');
  console.log(typeFilter);

  return (
    <div className="van-card">
      <Link to={`${id}`} state={{
        search: `?${searchParams.toString()}`,
        type: typeFilter
      }}>
        <img src={imageUrl} className="van-card--img" />
        <div className="van-card--info">
          <h2 className="van-card--name">{name}</h2>
          <span className="van-card--price">
            <h2>${price}</h2>/day
          </span>
        </div>
        <div className={`van-card--type type-${type}`}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </div>
      </Link>
    </div>
  );
};
