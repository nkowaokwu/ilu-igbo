export function validateProverbs(proverbs) {
  const requiredFields = ["text", "literalTranslation", "meaning"];
  const allowedFields = [...requiredFields, "audio", "tags", "moreInfo"];
  for (let proverb of proverbs) {
    requiredFields.forEach((f) => {
      if (!proverb[f]) {
        throw new Error(
          `required field '${f}' is missing in one of your proverbs`
        );
      }
    });

    Object.keys(proverb).forEach((prop) => {
      if (allowedFields.indexOf(prop) === -1) {
        throw new Error(`property ${prop} is not allowed`);
      }
    });
  }
  // if no error thrown so far return true for valid
  return true;
}
