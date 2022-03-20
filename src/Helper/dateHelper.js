function pad(n) {
  return n < 10 ? "0" + n : n;
}

export function DateFormater(value) {
  const newDate = new Date(value);
  const date = newDate.getDate();
  const month = newDate.getMonth();
  const year = newDate.getFullYear();
  const formatedDate = pad(date) + "." + pad(month + 1) + "." + year;
  return formatedDate;
}
