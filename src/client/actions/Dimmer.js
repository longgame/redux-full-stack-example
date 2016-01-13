export const SHOW_DIMMER = 'SHOW_DIMMER';
export function show() {
  return {
    type: SHOW_DIMMER,
  };
}

export const HIDE_DIMMER = 'HIDE_DIMMER';
export function hide() {
  return {
    type: HIDE_DIMMER,
  };
}
