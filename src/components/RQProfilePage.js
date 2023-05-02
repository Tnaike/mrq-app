import Nav from './Nav';

import Loader from './Loader';
import { getStatus } from '../utils';
import getProfileImage from '../utils/getProfileImage';
import defaultImage from '../assets/user.png';
import '../styles/index.css';
import { useUsersData } from '../hooks/useUsersData';

const RQProfilePage = () => {
  const { isLoading, data, isError, error, isFetching } = useUsersData();

  return (
    <>
      <Nav />
      {isLoading || isFetching ? (
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
