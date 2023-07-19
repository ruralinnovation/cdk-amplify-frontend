import { AuthUser } from '../models/AuthUser';
import ConfigurationService from '../services/ConfigurationService';
import { createContext } from 'react';

export interface AppContextPropsType {
  user: AuthUser | null;
  config: ConfigurationService;
  updateAuthUser: (user: AuthUser | null) => void;
}

export default createContext<AppContextPropsType>(undefined as any);
