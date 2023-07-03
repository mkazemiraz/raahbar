// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const convertEnglishToPersianDigits = (value: any) => {
  if (!value && value != "0") return value;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return value.toString().replace(/\d/g, (d: any) => "۰۱۲۳۴۵۶۷۸۹"[d]);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const formatNumbersWithCommas = (value: any) => {
  if (!value) return value;
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
