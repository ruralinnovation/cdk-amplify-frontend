import { AuthUser } from '../models/AuthUser';
import ConfigurationService from '../services/ConfigurationService';
import { createContext } from 'react';

export interface AppContextPropsType {
  config: ConfigurationService;
  user: AuthUser | null;
  updateAuthUser: (user: AuthUser | null) => void;
}

export default createContext<AppContextPropsType>(undefined as any);
