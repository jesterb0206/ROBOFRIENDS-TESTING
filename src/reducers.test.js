import * as reducers from './reducers';
import * as types from './constants';

const initialStateSearch = {
  searchField: '',
};

describe('Search Robots Reducer', () => {
  it('Should Return the Initial State', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({
      searchField: '',
    });
  });

  it('Should Handle CHANGE_SEARCHFIELD', () => {
    expect(
      reducers.searchRobots(initialStateSearch, {
        type: types.CHANGE_SEARCHFIELD,
        payload: 'abc',
      })
    ).toEqual({
      searchField: 'abc',
    });
  });
});

const initialStateRobots = {
  robots: [],
  isPending: true,
};

describe('Request Robots Reducer', () => {
  it('Should Return the Initial State', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual({
      robots: [],
      isPending: true,
    });
  });

  it('Should Handle REQUEST_ROBOTS_PENDING Action', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: types.REQUEST_ROBOTS_PENDING,
        payload: {isPending: true},
      })
    ).toEqual({
      robots: [],
      isPending: true,
    });
  });

  it('Should Handle REQUEST_ROBOTS_SUCCESS Action', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: types.REQUEST_ROBOTS_SUCCESS,
        payload: [
          {
            id: '1',
            name: 'Bradley',
            email: 'bradleyjester0@gmail.com',
          },
        ],
      })
    ).toEqual({
      robots: [
        {
          id: '1',
          name: 'Bradley',
          email: 'bradleyjester0@gmail.com',
        },
      ],
      isPending: false,
    });
  });

  it('Should Handle REQUEST_ROBOTS_FAILED Action', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: types.REQUEST_ROBOTS_FAILED,
        payload: 'No!',
      })
    ).toEqual({
      error: 'No!',
      robots: [],
      isPending: true,
    });
  });
});
