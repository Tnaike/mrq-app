export const getStatus = (status) => {
  switch (status) {
    case 'Active':
      return 'success';
    case 'Inactive':
      return 'warning';
    case 'Disabled':
      return 'danger';
    default:
      return 'default';
  }
};
