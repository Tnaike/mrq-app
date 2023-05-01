import React from 'react';
import { ReactComponent as LoadingImage } from '../assets/loading.svg';

const Loader = ({ label = false }) => {
  return (
    <div className='loadingWrap'>
      <LoadingImage className='animate-spin loaderIcon' />
      {label && <h3>Loading...</h3>}
    </div>
  );
};

export default Loader;
