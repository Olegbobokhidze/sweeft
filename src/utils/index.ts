export const filterObjectWithId = (arr: any, id: number) => {
  return arr.filter((obj: any) => obj.id !== id);
};
