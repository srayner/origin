export function fullName(person) {
  return person ? person.forenames + " " + person.surname : "unknown";
}

export function dateAsText(dateObject) {
  return dateObject.day + " " + dateObject.month + " " + dateObject.year;
}
