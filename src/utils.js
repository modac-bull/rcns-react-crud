export function timeToDate(date) {
  return (new Date(date * 1000)).toUTCString();
}