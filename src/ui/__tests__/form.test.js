/**
 * @jest-environment jsdom
 */

import { getFormData, openModal, getEmptyValues } from "../form.js";
import fixture from './form.fixture.js';

Object.defineProperty(window, 'location', {
  writable: true,
  value: { reload: jest.fn() },
});

test('it handles attendee', () => {
  document.body.innerHTML = fixture;
  const callbackMock = jest.fn();
  getFormData(callbackMock);
  document.querySelector('#submit-button').click();

  expect(callbackMock).toHaveBeenCalledTimes(1);
});

test('it closes modal on click', () => {
  document.body.innerHTML = `<div id='my-modal'></div>
                            <div class='close'></div>`
  openModal();
  document.querySelector('.close').click();

  expect(window.location.reload).toHaveBeenCalledTimes(1);
});

test('it closes modal on window click', () => {
  window.location.reload.mockReset();
  document.body.innerHTML = `<div id='my-modal'></div>
                            <div class='close'></div>`
  openModal();
  document.querySelector('#my-modal').click();

  expect(window.location.reload).toHaveBeenCalledTimes(1);
});

test('it fetches any empty value', () => {
  document.body.innerHTML = fixture;
  
  expect(getEmptyValues()).toBe(6);
});
