import countryListMapJson from '@/data/countries-codes-flags.json';

type Country = {
  flag: string;
  code: string;
  country: string;
  dialCode: string;
};

type CountryListMap = {
  [key: string]: Country;
};

const countryListMap = countryListMapJson as CountryListMap;

export const ACCEPTED_FILE_TYPES = [
  "application/pdf",
  "application/msword", 
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
];

export const ACCEPTED_FILE_EXTENSIONS = ".pdf,.doc,.docx";


export const getCountryListMap = () => {
  // console.log("Country List Map:", countryListMap);
  return countryListMap;
};

export const getCountryDialCode = (countryCode: string | number) => {
  const country = countryListMap[String(countryCode)];
  return country?.dialCode;
};

export const getCountryName = (countryCode: string | number) => {
  const country = countryListMap[String(countryCode)];
  return country?.country;
};

export const getCountryFlag = (countryCode: string | number) => {
  const country = countryListMap[String(countryCode)];
  return country?.flag;
};

