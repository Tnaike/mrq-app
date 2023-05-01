import Nav from './Nav';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchUsersProfile = () => {
  return axios.get('http://localhost:4000/users');
};

const RQProfilePage = () => {
  const { isLoading, data } = useQuery('users-profile', fetchUsersProfile);

  return (
    <>
      {isLoading ? (
        <h2 className='loading'>Loading...</h2>
      ) : (
        <>
          <Nav />
          <div className='container'>
            <div className='page-header'>
              <h3 className='mb-1'>RQ Profile Page</h3>
            </div>
            <div className='section-wrapper'>
              {data?.data.map((user) => (
                <div className='cards' key={user.id}>
                  <div className='card-img'>
                    <img src={user.profileImage} alt={user.name} />
                  </div>
                  <div className='card-details mt-2'>
                    <h3>{user.name}</h3>
                    <p>{user.position}</p>
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
