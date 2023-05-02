import { useQuery } from 'react-query';
import axios from 'axios';

export const USERS_PROFILE = 'users-profile ';

const fetchUsersProfile = () => {
  return axios.get('http://localhost:4000/users');
};

export const useUsersData = () => {
  return useQuery([USERS_PROFILE], fetchUsersProfile, {
    onSuccess(data) {
      return data;
    },
  });
};
