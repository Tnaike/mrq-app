import React from 'react';
import { useParams } from 'react-router-dom';
import { useUserData } from '../hooks/useUserData';
import Nav from './Nav';
import Loader from './Loader';
import { getStatus } from '../utils';
import defaultImage from '../assets/user.png';
import '../styles/index.css';

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
              <h3 className='mb-1'>RQ {user?.data?.name || 'User'} Profile</h3>
              <p>Using reactQuery</p>
            </div>
            <section>
              <div className='cards'>
                <div className='card-img'>
                  <img
                    src={user?.data.profileImage || defaultImage}
                    alt={user.data.name}
                    onError={(e) => {
                      e.target.src = defaultImage;
                    }}
                  />
                  <div className='user-Status'>
                    <span
                      className={getStatus(user?.data?.status)}
                      title={user?.data.status}
                    ></span>
                  </div>
                </div>
                <div className='card-details mt-2'>
                  <h3 className='userName'>{user.data.name}</h3>
                  <p className='userPosition'>{user.position}</p>
                  <div className='card-cs'>
                    <p className='userEmail'>{user?.data.email}</p>
                    <p className='userLocation'>{user?.data.location}</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
      )}
    </>
  );
};

export default RQUserProfile;
