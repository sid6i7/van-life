import React from 'react'
import '../../css/HostVanCard.css';
import {Link} from 'react-router-dom';

export const HostVanCard = (props) => {
  return (
    <div className='host-van-card'>
        <Link to={`${props.id}`}>
        <img src={props.imgUrl} className='host-van-card--img'/>
        <div className='host-van-card--info'>
            <h3 className='host'>{props.name}</h3>
            <span>{`$${props.price}/day`}</span>
        </div>
        </Link>
    </div>
  )
}
