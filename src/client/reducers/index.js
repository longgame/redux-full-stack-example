import { combineReducers } from 'redux';

import dimmer from './Dimmer';
import session from './Session';

export default combineReducers({
  dimmer,
  session,
});
