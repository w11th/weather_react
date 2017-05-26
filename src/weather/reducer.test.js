import reducer from './reducer.js';
import * as Status from './status.js';
import * as actions from './actions.js';

describe('weather reducer', () => {
  it('should return loading status', () => {
    const action = actions.fetchWeatherStarted();
    const newState = reducer({}, action);
    expect(newState.status).toBe(Status.LOADING);
  });
});
