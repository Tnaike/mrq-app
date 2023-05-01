import Nav from './Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Loader from './Loader';
import getProfileImage from '../utils/getProfileImage';
import defaultImage from '../assets/user.png';
import '../styles/index.css';

const ProfilePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/users').then((response) => {
      setData(response.data);
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
                    />
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

export default ProfilePage;
