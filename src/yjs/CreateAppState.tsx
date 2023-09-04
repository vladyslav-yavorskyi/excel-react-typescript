import React from 'react';
import CreateAwarenessUsers from './CreateAwarenessUsers';

function CreateAppState(networkProvider: any, doc: any) {
  const { localUser, remoteUsers, handleLogin, handleCursorPositionChange } =
    CreateAwarenessUsers(networkProvider);

  const state = doc.getMap('state');

  return {
    localUser,
    remoteUsers,
    handleLogin,
  };
}

export default CreateAppState;
