import { combineReducers } from 'redux';
import {
  companionWindowsReducer,
  configReducer,
  errorsReducer,
  infoResponsesReducer,
  manifestsReducer,
  viewersReducer,
  windowsReducer,
  rangesReducer,
  workspaceReducer,
  annotationsReducer,
} from '.';

/**
 * Function to create root reducer
 * from plugin reducers.
 * @namespace CreateRootReducer
 */
export default function createRootReducer(pluginReducers) {
  return combineReducers({
    annotations: annotationsReducer,
    companionWindows: companionWindowsReducer,
    config: configReducer,
    errors: errorsReducer,
    infoResponses: infoResponsesReducer,
    manifests: manifestsReducer,
    ranges: rangesReducer,
    viewers: viewersReducer,
    windows: windowsReducer,
    workspace: workspaceReducer,
    ...pluginReducers,
  });
}
