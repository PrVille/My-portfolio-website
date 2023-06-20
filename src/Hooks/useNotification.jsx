import React from 'react';
import { NotificationContext } from '../Providers/NotificationProvider';

const useNotification = () => {
  const { notification, addNotification, clearNotification } = React.useContext(NotificationContext);

  return {
    notification,
    addNotification,
    clearNotification,
  };
};

export default useNotification;
