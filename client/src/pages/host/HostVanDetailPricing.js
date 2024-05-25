import React from 'react';
import { useOutletContext } from 'react-router-dom';
import '../../css/HostVanDetail.css';

export const HostVanDetailPricing = () => {
  const [hostVan, setHostVan] = useOutletContext();
  return (
    <div className='host-van-detail--pricing'>
        {`$${hostVan.price}.00/day`}
    </div>
  )
}
