import mapAttendees from './mapper/attendeeMapper.js';
import saveAttendee from './attendee.js';

const $formData = document.querySelectorAll('#form input');
const $submitButton = document.querySelector('#submit-button');

$submitButton.onclick = () => {
  const formData = {};
  $formData.forEach((data) => {
    formData[`${data.id}`] = data.value;
  });
  const attendee = { id: Date.now(), ...formData };
  const properAttendee = mapAttendees(attendee);
  saveAttendee(properAttendee);
};
