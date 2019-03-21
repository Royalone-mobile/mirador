import ActionTypes from './action-types';

/**
 * toggleRange - action creator
 *
 * @param  {String} windowId
 * @param  {String} rangeId
 * @memberof ActionCreators
 */
export function toggleRange(windowId, rangeId) {
  console.log('it got called');
  return (dispatch) => {
    dispatch({
      payload: {
        rangeId,
        windowId,
      },
      type: ActionTypes.TOGGLE_RANGE,
    });
  };
}
