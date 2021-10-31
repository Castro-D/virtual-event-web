export default function saveAttendee(attendee) {
  localStorage.setItem(`attendee_${attendee.id}`, JSON.stringify(attendee));
}
