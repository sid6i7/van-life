import "../css/VanType.css";

export const VanType = ({type}) => {
    return (
        <div className={`van-card--type type-${type}`}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </div>
    )
}