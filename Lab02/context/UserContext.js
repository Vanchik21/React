import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userPermissions, setUserPermissions] = useState([]);

  useEffect(() => {
    const fetchPermissions = async () => {
      const permissions = await new Promise((resolve) =>
        setTimeout(() => resolve(['view_content', 'edit_content']), 500)
      );
      setUserPermissions(permissions);
    };

    fetchPermissions();
  }, []);

  return (
    <UserContext.Provider value={{ userPermissions }}>
      {children}
    </UserContext.Provider>
  );
};
