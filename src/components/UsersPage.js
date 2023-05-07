import Nav from './Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Loader from './Loader';
import { getStatus } from '../utils';
import getProfileImage from '../utils/getProfileImage';
import defaultImage from '../assets/user.png';
import '../styles/index.css';

const UsersPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:4000/users')
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Nav />
      {isLoading ? (
        <Loader label />
      ) : (
        <>
          {error && (
            <div className='errorMessage container'>
              <h3>{error}</h3>
            </div>
          )}

          <div className='container'>
            <div className='page-header'>
              <h3 className='mb-1'>Profile Page</h3>
            </div>
            <div className='section-wrapper'>
              {data.map((user) => (
                <div className='cards' key={user.id}>
                  <div className='card-img'>
                    <img
                      src={getProfileImage(user?.profileImage, defaultImage)}
                      alt={user.name}
                      onError={(e) => {
                        e.target.src = defaultImage;
                      }}
                    />
                    <div className='user-Status'>
                      <span
                        className={getStatus(user?.status)}
                        title={user?.status}
                      ></span>
                    </div>
                  </div>
                  <div className='card-details mt-2'>
                    <h3 className='userName'>{user.name}</h3>
                    <p className='userPosition'>{user.position}</p>
                    <div className='card-cs'>
                      <p className='userEmail'>{user.email}</p>
                      <p className='userLocation'>{user.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default UsersPage;
