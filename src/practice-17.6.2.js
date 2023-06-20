export function repeatWord(word, count) {
  let words = "";
  if (isNaN(count)) return (words = "error");
  if (count <= 0) words = "error";
  for (let i = 1; i <= count; i++) {
    if (!(i === +count)) {
      words += word + i + ", ";
    } else {
      words += word + i;
    }
  }
  return words;
}
