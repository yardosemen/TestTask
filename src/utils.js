export const arrayToObject = (array) => {
  const result = {};
  array.forEach((item) => {
    result[item.name] = item.value;
  });
  return result;
};