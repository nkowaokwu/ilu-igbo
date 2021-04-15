export function textToJson(text) {
  let provArray = text.split(/\n*\d+\.\s/);
  return provArray
    .filter((prov) => prov !== "")
    .map((prov) => ({ text: prov }));
}
