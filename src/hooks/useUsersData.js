import { useQuery } from 'react-query';
import axios from 'axios';

export const USERS_LIST = 'users-list ';

const fetchUsersList = () => {
  return axios.get('http://localhost:4000/users');
};

export const useUsersData = () => {
  return useQuery([USERS_LIST], fetchUsersList, {
    onSuccess(data) {
      return data;
    },
  });
};
