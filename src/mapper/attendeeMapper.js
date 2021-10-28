import Attendee from '../entity/attendee.js';

export default function mapAttendees({
  id,
  'first-name': firstName,
  'sur-name': lastName,
  mail,
  country,
  phone,
  job,
}) {
  return new Attendee(
    id,
    firstName,
    lastName,
    mail,
    country,
    phone,
    job,
  );
}
