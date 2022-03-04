export const getCategoryTotal = expenses => {
  const obj = {};
  expenses?.forEach(item => {
    const key = item?.category?.label;
    const current = obj[key];
    if (obj[key]) {
      obj[key] = {...current, amount: +current?.amount + +item?.amount};
    } else {
      obj[key] = item;
    }
  });
  return Object.values(obj);
};
