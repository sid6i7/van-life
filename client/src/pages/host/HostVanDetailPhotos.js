import React from 'react'
import {useOutletContext} from 'react-router-dom';
import "../../css/HostVanDetail.css";

export const HostVanDetailPhotos = (props) => {
  const [hostVan, setHostVan] = useOutletContext();

  return (
    <div className='host-van-detail--photos-container'>
        <img src={hostVan.imageUrl}/>
    </div>
  )
}
