import { drawRoundedRect, drawRoundedRectangle } from "./canvasDraw";

const canvas = document.getElementById("example");
const ctx = canvas.getContext("2d");

const generateRandomNumber = (min, max) => {
  if (min > max) {
    // Обмен значениями, если min больше max
    let temp = min;
    min = max;
    max = temp;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const IPHONE_ICONS = [
  {
    src: `mobile_bar/Wifi_${generateRandomNumber(1, 3)}.png`,
    cb: (img) => ctx.drawImage(img, 479, 25, 24, 17),
  },
  {
    src: `mobile_bar/gps_${generateRandomNumber(1, 4)}.png`,
    cb: (img) => ctx.drawImage(img, 449, 25, 24, 17),
  },
];

const APP_ICONS = [
  "binance",
  "bybit",
  "disk space",
  "facebook",
  "fb msg",
  "inst",
  "telegram",
  "tiktok",
  "twitter",
  "viber",
  "warning",
  "yt",
];

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // обмен элементами
  }
};

const getRandomElements = (array, count) => {
  shuffleArray(array);
  return array.slice(0, count);
};

const loadAllIcons = async (icons) => {
  const promiseArray = [];

  icons.forEach((icon) => {
    promiseArray.push(
      new Promise((resolve) => {
        const img = new Image();

        img.src = icon.src;
        img.onload = function () {
          icon.cb(img);
          resolve();
        };
      })
    );
  });

  await Promise.all(promiseArray);
};

const generateApps = (ctx) => {
  const appsCount = generateRandomNumber(0, 5);
  const apps = getRandomElements(APP_ICONS, appsCount);
  const modifiedApps = [];
  let xPos = 85;

  for (let i = 0; i < appsCount; i++) {
    modifiedApps.push({
      src: `mobile_bar/apps/${apps[i]}.png`,
      cb: (img) => {
        ctx.drawImage(img, xPos, 18, img.width, img.height);
        xPos += img.width + 10;
      },
    });
  }

  modifiedApps.push({
    src: `mobile_bar/gps_android_${generateRandomNumber(1, 5)}.png`,
    cb: (signalLevel) => ctx.drawImage(signalLevel, 451, 18, 23, 16),
  });

  modifiedApps.push({
    src: `mobile_bar/wifi_android_${generateRandomNumber(1, 4)}.png`,
    cb: (wifi) => ctx.drawImage(wifi, 480, 15, 27, 20),
  });

  if (Math.random() >= 0.5) {
    modifiedApps.push({
      src: `mobile_bar/android-alarm-clock.png`,
      cb: (alarmClock) => ctx.drawImage(alarmClock, 420, 15, 20, 20),
    });
  }

  return modifiedApps;
};

export const drawBattery = (ctx, battery) => {
  const batteryValue = (battery / 100) * 33;
  ctx.fillStyle = "black";

  drawRoundedRect(ctx, 500, 32, batteryValue, 14.1, 5);
};

export const generateIphoneMobileBar = async (ctx, platform) => {
  const batteryValue = `${Math.floor(Math.random() * 61) + 20}`;

  if (platform === "bybit") {
    drawRoundedRectangle(ctx, 509, 24.2, batteryValue / 3.2, 19, 6);
    await loadAllIcons(IPHONE_ICONS);

    ctx.fillStyle = "black";
    ctx.font = "17px SF Pro Display Bold";
    ctx.fillText(batteryValue, 515, 40);
  } else {
    drawBattery(ctx, batteryValue);
  }
};

export const generateAndroidMobileBar = async (ctx) => {
  const batteryValue = `${Math.floor(Math.random() * 20) + 52}`;

  const apps = generateApps(ctx);
  await loadAllIcons(apps);

  ctx.fillStyle = "white";
  ctx.font = "10px Montserrat";
  ctx.fillText(batteryValue, 524, 29);
};
