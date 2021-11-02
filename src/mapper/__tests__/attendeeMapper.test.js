import mapAttendees from "../attendeeMapper.js";
import Attendee from '../../entity/attendee.js'

it('transforms input data to an attendee entity', () => {
  expect(mapAttendees({})).toBeInstanceOf(Attendee);
});