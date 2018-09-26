import deepFreeze from 'deep-freeze';
import reducer from './categories';

describe('category reducer', () => {
  it('returns the start state', () => {
    let response = reducer();
    expect(response).toEqual([]);
  });

  it('returns the active state when given an invalid action', () => {
    const state = ['test'];
    const action = {
      type: 'NOTREAL',
    };

    deepFreeze(state);
    deepFreeze(action);

    let response = reducer(state, action);
    expect(response).toBe(state);
  });

  it('can create a category', () => {
    const state = [{ title: 'test 2' }];
    const action = {
      type: 'CATEGORY_CREATE',
      payload: { title: 'created' },
    };

    deepFreeze(state);
    deepFreeze(action);

    let response = reducer(state, action);
    expect(response).toEqual([
      { title: 'test 2' },
      { title: 'created' },
    ]);
  });

  it('can update a category', () => {
    const state = [
      { _id: 1, title: 'update' },
      { _id: 2, title: 'not update' },
    ];

    const action = {
      type: 'CATEGORY_UPDATE',
      payload: { _id: 1, title: 'UPDATED' },
    };

    deepFreeze(state);
    deepFreeze(action);

    let response = reducer(state, action);

    expect(response).toEqual([
      { _id: 1, title: 'UPDATED' },
      { _id: 2, title: 'not update' },
    ]);
  })
})