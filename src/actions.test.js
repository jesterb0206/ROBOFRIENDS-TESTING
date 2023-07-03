import * as actions from './actions';
import * as types from './constants';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

export const mockStore = configureMockStore([thunkMiddleware]);

describe('Actions', () => {
  it('Should Create an Action to Search', () => {
    const text = 'Finish Docs';
    const expectedAction = {
      type: types.CHANGE_SEARCHFIELD,
      payload: text,
    };
    expect(actions.setSearchField(text)).toEqual(expectedAction);
  });
});

describe('Fetch Robots Action PENDING', () => {
  it('Should Create a Pending Action on Request Robots', () => {
    const store = mockStore();
    store.dispatch(actions.requestRobots());
    const action = store.getActions();
    expect(action[0]).toEqual({type: 'REQUEST_ROBOTS_PENDING'});
  });
});
