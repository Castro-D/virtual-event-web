import initialize from "../event.js";
import '../index.js'

jest.mock('../event.js', () => jest.fn());

test('initialize virtual event web', () => {
  expect(initialize)
    .toHaveBeenCalledTimes(1);
});