export const SHOW_DIMMER = 'SHOW_DIMMER';
export const HIDE_DIMMER = 'HIDE_DIMMER';

export const DimmerItems = {
  REGISTER_MODAL: 'REGISTER_MODAL',
  LOGIN_MODAL: 'LOGIN_MODAL',
};

export function show(content) {
  return {
    type: SHOW_DIMMER,
    content
  };
}

export function showRegisterModal() {
  return {
    type: SHOW_DIMMER,
    content: DimmerItems.REGISTER_MODAL
  };
}

export function showLoginModal() {
  return {
    type: SHOW_DIMMER,
    content: DimmerItems.LOGIN_MODAL
  };
}

export function hide() {
  return {
    type: HIDE_DIMMER,
    content: null
  };
}
