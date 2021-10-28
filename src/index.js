import mapAttendees from './mapper/attendeeMapper.js';
import saveAttendee from './attendee.js';
import getFormData from './ui/form.js';

function handleOnClick(attendee) {
  const entity = mapAttendees(attendee);
  saveAttendee(entity);
}

function initialize() {
  getFormData(handleOnClick);
}

initialize();
