import React from 'react';
import usePermission from '../hooks/usePermission.js';

const ProtectedComponent = () => {
  const canViewContent = usePermission('view_content');

  if (!canViewContent) {
    return <div>Access Denied</div>;
  }

  return (
    <div>
      <h2>Protected Content</h2>
      <p>You have access to this content because you have the required permissions.</p>
    </div>
  );
};

export default ProtectedComponent;
