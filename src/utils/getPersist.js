export const getPersist = (object, value) => {
  const tags = object.map((el) => el[value]);
  const res = new Set(tags.flat());
  return Array.from(res);
};
