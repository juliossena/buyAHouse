const BUY_A_HOUSE = 'buyAhouse';

export const setInfoStorage = (info) => {
  localStorage.setItem(BUY_A_HOUSE, JSON.stringify(info));
};

export const getInfoStorage = () => {
  const infoLocalStorage = localStorage.getItem(BUY_A_HOUSE);
  if (infoLocalStorage) {
    return JSON.parse(infoLocalStorage);
  }
  return [];
};

export const insertInfoStorage = (info) => {
  const infosStorage = getInfoStorage();
  if (infosStorage.length === 0) {
    setInfoStorage([
      {
        ...info,
      },
    ]);
  } else {
    infosStorage.push(info);
    setInfoStorage(infosStorage);
  }
};
