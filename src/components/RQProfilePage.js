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
          <h3>RQ Profile Page</h3>
          {data?.data.map((user) => {
            return <div key={user.id}>{user.name}</div>;
          })}
        </>
      )}
    </>
  );
};

export default RQProfilePage;
