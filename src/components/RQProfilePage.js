import Nav from './Nav';
import { useQuery } from 'react-query';
import axios from 'axios';

import Loader from './Loader';
import { getStatus } from '../utils';
import getProfileImage from '../utils/getProfileImage';
import defaultImage from '../assets/user.png';
import '../styles/index.css';

const fetchUsersProfile = () => {
  return axios.get('http://localhost:4000/users');
};

const RQProfilePage = () => {
  const { isLoading, data } = useQuery('users-profile', fetchUsersProfile);

  return (
    <>
      <Nav />
      {isLoading ? (
        <Loader label />
      ) : (
        <>
          <div className='container'>
            <div className='page-header'>
              <h3 className='mb-1'>RQ Profile Page</h3>
              <p>Using reactQuery</p>
            </div>
            <div className='section-wrapper'>
              {data?.data.map((user) => (
                <div className='cards' key={user.id}>
                  <div className='card-img'>
                    <img
                      src={getProfileImage(user?.profileImage, defaultImage)}
                      alt={user.name}
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

export default RQProfilePage;
