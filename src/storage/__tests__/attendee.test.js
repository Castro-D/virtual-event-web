import saveAttendee from "../attendee.js";

const localStorageMock = {
  setItem: jest.fn()
};
global.localStorage = localStorageMock;

test('it saves attendee to localstorage', () => {
  const attendee = {id: 'test'};
  saveAttendee(attendee);

  expect(global.localStorage.setItem).toHaveBeenCalledTimes(1);
  expect(global.localStorage.setItem).toHaveBeenCalledWith('attendee_test', JSON.stringify(attendee));
});