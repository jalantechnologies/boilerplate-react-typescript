export enum ComponentViewState {
  DEFAULT,
  LOADING,
  LOADED,
  NO_DATA,
  ERROR,
}

/**
 * Every component in the system has state type
 * that should derive this interface
 */
export interface ComponentState {
  componentState: ComponentViewState;
  error?: string;
}
