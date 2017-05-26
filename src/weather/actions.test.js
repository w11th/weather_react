import * as actionTypes from './actionTypes.js';
import * as actions from './actions.js';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
const middlewares = [thunk];
const createMockStore = configureStore(middlewares);

import {stub} from 'sinon';

describe('fetchWeather', () => {
  let stubbedFetch;
  let store;

  beforeEach(() => {
    store = createMockStore({});
    stubbedFetch = stub(global, 'fetch');
  });

  afterEach(() => {
    stubbedFetch.restore();
  });

  it('should dispatch fetchWeatherSuccess action type on fetch success', (done) => {
    const mockResponse = Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        weatherinfo: {}
      })
    });
    stubbedFetch.returns(mockResponse);

    setTimeout(function() {
      const dispatchedActions = store.getActions();

      expect(dispatchedActions.length).toBe(2);
      expect(dispatchedActions[0].type).toBe(actionTypes.FETCH_STARTED);
      expect(dispatchedActions[1].type).toBe(actionTypes.FETCH_SUCCESS);
      done();
    }, 100);

    store.dispatch(actions.fetchWeather(1));
  });
});
