import reducer, { initialState } from '../../store/features/cellSlice';

test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual(initialState);
});
