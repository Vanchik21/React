import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const usePermission = (permissionName) => {
  const { userPermissions } = useContext(UserContext);
  return userPermissions.includes(permissionName);
};

export default usePermission;
