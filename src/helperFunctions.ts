//example: converts 2507.51 to E2.507,51
export const formatNumberToNlCurrency = (amount: number) => {
  return new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(amount);
};

//timestamp conversion
export const getDateFromTimeStamp = (timestamp: number) => {
  let d = new Date(timestamp);
  let timeStampCon = d.getDate() + '-' + d.getMonth() + '-' + d.getFullYear();

  return timeStampCon;
};
