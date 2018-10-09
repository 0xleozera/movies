import store from '../../../../components/app/store';

test('[Redux] store should match snapshot', () => {
  const state = store.getState();
  expect(state).toMatchSnapshot();
});
