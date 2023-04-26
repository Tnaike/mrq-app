import Nav from './Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ProfilePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/user').then((response) => {
      setData(response.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <h2 className='loading'>Loading...</h2>
      ) : (
        <>
          <Nav />
          <h3>Profile Page</h3>
          {data.map((user) => {
            return <div key={user.id}>{user.name}</div>;
          })}
        </>
      )}
    </>
  );
};

export default ProfilePage;
