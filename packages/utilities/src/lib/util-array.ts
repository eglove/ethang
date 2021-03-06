export const arrayHasDuplicate = (array: unknown[]): boolean => {
  return array.some((item, index) => {
    return array.indexOf(item) !== index;
  });
};

export const shuffleArray = <Type>(array: Type[]): Type[] => {
  for (let index = array.length - 1; index > 0; index -= 1) {
    const index_ = Math.floor(Math.random() * index);
    const temporary = array[index];
    array[index] = array[index_];
    array[index_] = temporary;
  }

  return array;
};
