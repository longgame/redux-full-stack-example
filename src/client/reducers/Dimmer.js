import { SHOW_DIMMER, HIDE_DIMMER } from '../actions/Dimmer';

export default function dimmer(state=false, action) {
  switch (action.type) {
    case SHOW_DIMMER:
      return {
        isVisible: true,
      };
    case HIDE_DIMMER:
      return {
        isVisible: false
      };
    default:
      return state;
  }
}
