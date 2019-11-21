/* eslint-disable import/prefer-default-export */
export const arrayMove = (items, oldIndex, newIndex) => {
  const newArray = items.slice();
  const element = newArray[oldIndex];
  newArray.splice(oldIndex, 1);
  newArray.splice(newIndex, 0, element);
  return newArray;
};
/* eslint-enable import/prefer-default-export */
