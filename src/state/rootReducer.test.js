import rootReducer from './rootReducer';


describe('initial state', () => {
  let state;

  beforeEach(() => {
    state = rootReducer();
  });

  it('must contain the router state', () => {
    expect(state.router).toBeDefined();
  });

  it('must contain the counter state', () => {
    expect(state.counter).toBeDefined();
  });
});
