import React, { useCallback, useEffect, useReducer } from 'react';
import AppContext from './AppContext';
import { contextReducer, ACTIONS } from './ContextReducer';
import ConfigurationService from '../services/ConfigurationService';
import { AuthUser } from '../models/AuthUser';

const buildContextState = () => {
  return {
    user: null,
    config: ConfigurationService,
  };
};

const ContextProvider = (props: any) => {
  const config: ConfigurationService = new ConfigurationService();
  const initializeConfig = useCallback(async () => {
    if (config.loaded) return;
    await config.load();
    setConfig(config);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    initializeConfig();
  }, [initializeConfig]);

  const [state, dispatch] = useReducer(contextReducer, buildContextState());

  const setConfig = (config: ConfigurationService) => {
    dispatch({
      type: ACTIONS.SET_DEFAULT_GLOBAL_CONFIG,
      payload: config,
    });
  };
  const updateAuthUser = useCallback((user: AuthUser) => {
    dispatch({ type: ACTIONS.UPDATE_AUTH_USER, payload: user });
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        updateAuthUser,
      }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
