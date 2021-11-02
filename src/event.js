import mapAttendees from './mapper/attendeeMapper.js';
import saveAttendee from './storage/attendee.js';
import { getFormData, openModal, getEmptyValues } from './ui/form.js';
import validateValues from './utilities/validator.js';

function handleOnClick(attendee) {
  const entity = mapAttendees(attendee);
  const emptyStrings = getEmptyValues();
  validateValues(emptyStrings, saveAttendee, openModal, entity);
}

export default function initialize() {
  getFormData(handleOnClick);
}