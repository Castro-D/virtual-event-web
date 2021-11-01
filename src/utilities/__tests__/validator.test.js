import validateValues from "../validator.js";

let emptyInputs = 1;
const storageCallback = jest.fn();
const modalCallback = jest.fn();
const object = {};

test('it pops an alert if theres at least 1 empty input', () => {
  global.alert = jest.fn();
  validateValues(emptyInputs, storageCallback, modalCallback, object);

  expect(global.alert).toHaveBeenCalledTimes(1);
});

test('it saves data in storage', () => {
  emptyInputs = 0;
  validateValues(emptyInputs, storageCallback, modalCallback, object);

  expect(storageCallback).toHaveBeenCalledTimes(1);
  expect(modalCallback).toHaveBeenCalledTimes(1);
  expect(storageCallback).toHaveBeenCalledWith(object);
});