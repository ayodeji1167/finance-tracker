export const getLocalStorageArray = (key: string) => {
  const storedData = localStorage.getItem(key);
  return storedData ? JSON.parse(storedData) : [];
};

export const setLocalStorageArray = (key: string, newItem: any) => {
  const currentArray = getLocalStorageArray(key);
  currentArray.push(newItem);
  localStorage.setItem(key, JSON.stringify(currentArray));
};
