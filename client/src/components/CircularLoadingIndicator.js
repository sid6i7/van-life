import React from 'react';
import ReactLoading from 'react-loading';
import "../css/Home.css";

export const CircularLoadingIndicator = () => {
  return (
    <div className='circular-loading'>
        <ReactLoading type={'spin'} color={'black'} height={50} width={50} />
    </div>
  )
}
