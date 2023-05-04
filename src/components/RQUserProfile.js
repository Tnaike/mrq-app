import React from 'react';
import { useParams } from 'react-router-dom';
import { useUserData } from '../hooks/useUserData';
import Nav from './Nav';
import Loader from './Loader';

const RQUserProfile = () => {
  const { userId } = useParams();
  const { isLoading, data: user, isError, error } = useUserData(userId);

  return (
    <>
      <Nav />
      {isLoading ? (
        <Loader label />
      ) : (
        <>
          {isError && (
            <div className='errorMessage container'>
              <h3>{error.message}</h3>
            </div>
          )}
          <div className='container'>
            <div className='page-header'>
              <h3 className='mb-1'>RQ Users Page</h3>
              <p>Using reactQuery</p>
            </div>
            <div className='card-cs'>
              <p className='userEmail'>{user?.data.email}</p>
              <p className='userLocation'>{user?.data.location}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default RQUserProfile;
