import mapAttendees from './mapper/attendeeMapper.js';
import saveAttendee from './attendee.js';
import { getFormData, openModal } from './ui/form.js';

function handleOnClick(attendee) {
  const entity = mapAttendees(attendee);
  saveAttendee(entity);
  openModal();
}

function initialize() {
  getFormData(handleOnClick);
}

initialize();
