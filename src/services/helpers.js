export function textToJson(text) {
  let provArray = text.split(/\n*\d+\.\s/);
  return provArray
    .filter((prov) => prov !== "")
    .map((prov) => ({ text: prov }));
}

// Strips diacritics from a string
// Example: removeDiacritics('ï') -> 'i'
export function removeDiacritics(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Determines if a haystack contains a needle.  Case and accent insensitive.
// Example: normalizedContains('Ọkụkọ', 'O') -> true
export const normalizedContains = (haystack, needle) => {
  const regExp = new RegExp(removeDiacritics(needle), "gi");
  return regExp.test(removeDiacritics(haystack));
};
