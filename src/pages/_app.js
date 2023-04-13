import {
  NotificationBell,
  NovuProvider,
  PopoverNotificationCenter,
} from '@novu/notification-center';
import React from 'react';

import 'styles/main.css';
import useUserUuid from 'hooks/use-user-uuid';
// eslint-disable-next-line react/prop-types
const MyApp = ({}) => {
  const userUuid = useUserUuid();

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <NovuProvider
      subscriberId={'on-boarding-subscriber-id-123'}
      applicationIdentifier={'SPiSlwUIi1AP'}
    >
      <PopoverNotificationCenter colorScheme={'light'}>
        {({ unseenCount }) => <NotificationBell unseenCount={unseenCount} />}
      </PopoverNotificationCenter>
    </NovuProvider>
  );
};

export default MyApp;
