import { useQuery } from 'react-query';
import axios from 'axios';

export const USERS_PROFILE = 'user-profile';

const fetchUserProfile = ({ queryKey }) => {
  const userId = queryKey[1];
  return axios.get(`http://localhost:4000/users/${userId}`);
};

export const useUserData = (userId) => {
  return useQuery([USERS_PROFILE, userId], fetchUserProfile);
};
