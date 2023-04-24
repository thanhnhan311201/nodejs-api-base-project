export const typeOf = (value: any): string => {
  return Object.prototype.toString().slice(8, -1);
};
