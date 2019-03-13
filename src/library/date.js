export function looksLikeDate(string) {
  let match = string.match(
    /\b(0?[1-9]|[1-2][0-9]|3[0-1])\b\/\b(0?[1-9]|1[0-2])\b\/\b(0?[1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])\b/gm
  );
  if (match && match.length === 3) {
    console.log(match[0]);
    console.log(match[1]);
    console.log(match[2]);
  }
}
