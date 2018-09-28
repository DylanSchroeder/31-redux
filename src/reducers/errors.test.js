// import deepFreeze from 'deep-freeze';
import reducer from './errors';

describe('error reducer', () => {
  it('returns the start state', () => {
    let response = reducer();
    expect(response).toEqual(null);
  });

});


//TODO add more tests this, nothing really helpful tested yet