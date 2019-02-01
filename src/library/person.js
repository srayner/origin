export function fullName(person) {
  return person ? person.forenames + " " + person.surname : "unknown";
}

export function dateAsText(dateObject) {
  if (!dateObject) {
    return "";
  }
  return dateObject.day + " " + dateObject.month + " " + dateObject.year;
}
