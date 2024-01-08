import { TEMPLATE_OPTIONS } from "./TEMPLATE_OPTIONS";

export const addFontsToDocument = async (fonts) => {
  fonts.forEach((font) => {
    font.load().then((loadedFont) => {
      document.fonts.add(loadedFont);
    });
  });
};

export const generateRandomString = (length) => {
  let result = "";
  const characters = "0123456789abcdef";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const createCustomString = () => {
  const prefix = "0x00";
  // Учитываем длину префикса (4 символа), вычитаем их из общей длины строки
  const restOfTheString = generateRandomString(64 - prefix.length);
  return prefix + restOfTheString;
};

export const generateBingXTXID = (length) => {
  let result = "0x00";
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const splitText2Chunks = (text, count) => {
  const part1 = text.substring(0, count);
  const part2 = text.substring(count);

  return [part1, part2];
};

export const splitText3Chunks = (text) => {
  const part1 = text.substring(0, 27);
  const part2 = text.substring(27, 54);
  const part3 = text.substring(54);

  return [part1, part2, part3];
};

export const generateRandomSevenDigitNumber = () => {
  let result = "";
  const digits = "0123456789";

  for (let i = 0; i < 7; i++) {
    result += digits.charAt(Math.floor(Math.random() * digits.length));
  }

  return result;
};

export const getDataFromUser = () => {
  const amountInput = document.getElementById("amount");
  const timeInput = document.getElementById("time");
  const walletInput = document.getElementById("wallet");
  const mobileTimeInput = document.getElementById("mobile-time");
  const commissionInput = document.getElementById("commission");

  return {
    amount: amountInput.value,
    time: timeInput.value,
    wallet: walletInput.value,
    mobileTime: mobileTimeInput.value,
    commission: commissionInput.value,
  };
};

export const getTemplateOptions = (type) => {
  const platform = type.split("-")[0];
  const action = type.split("-")[1];
  const mobileOS = type.split("-")[2];
  return TEMPLATE_OPTIONS[platform][action][mobileOS];
};

export const getCurrentDateTime = (isFullTime) => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Месяцы начинаются с 0
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  if (isFullTime) {
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  return `${hours}:${minutes}`;
};

export const toggleInput = (input, status) => {
  if (status) {
    input.style.display = "flex";
  } else {
    input.style.display = "none";
  }
};
