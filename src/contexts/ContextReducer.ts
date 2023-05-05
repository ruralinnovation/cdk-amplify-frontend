export const ACTIONS = {
  UPDATE_AUTH_USER: 'UPDATE_AUTH_USER',
  SET_DEFAULT_GLOBAL_CONFIG: 'SET_DEFAULT_GLOBAL_CONFIG',
};

export function contextReducer(state: any, action: any) {
  switch (action.type) {
    case ACTIONS.SET_DEFAULT_GLOBAL_CONFIG: {
      return {
        ...state,
        config: action.payload,
      };
    }
    case ACTIONS.UPDATE_AUTH_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }
    default:
      return state;
  }
}
