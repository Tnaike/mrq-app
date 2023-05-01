import Nav from './Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
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
      {isLoading ? (
        <h2 className='loading'>Loading...</h2>
      ) : (
        <>
          <Nav />
          <div className='container'>
            <div className='page-header'>
              <h3 className='mb-1'>Profile Page</h3>
            </div>
            <div className='section-wrapper'>
              {data.map((user) => (
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

export default ProfilePage;
