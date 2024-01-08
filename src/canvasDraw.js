import {
  createCustomString,
  generateRandomString,
  splitText2Chunks,
  splitText3Chunks,
} from "./helpers";
import {
  generateAndroidMobileBar,
  generateIphoneMobileBar,
} from "./generateMobileBar";

const canvas = document.getElementById("example");

export const drawBattery = (ctx, battery) => {
  const batteryValue = (battery / 100) * 33;
  ctx.fillStyle = "black";

  drawRoundedRect(ctx, 500, 32, batteryValue, 14.1, 5);
};

export const drawMobileBar = async (
  ctx,
  options,
  mobileOS,
  platform,
  mobileTime
) => {
  ctx.textAlign = "start";

  if (mobileOS === "iphone") await generateIphoneMobileBar(ctx, platform);

  if (mobileOS === "android") await generateAndroidMobileBar(ctx);

  ctx.fillStyle = options.mobileTime.color;
  ctx.font = options.mobileTime.font;
  ctx.fillText(
    mobileTime,
    options.mobileTime.position[0],
    options.mobileTime.position[1]
  );
};

export const drawCommission = (ctx, options, commission) => {
  ctx.fillStyle = options.commission.color;
  ctx.font = options.commission.font;

  ctx.fillText(
    commission,
    options.commission.position[0],
    options.commission.position[1]
  );
};

export const drawAmount = (ctx, platform, options, amount) => {
  const amountWithCurrency = platform === "bybit" ? `${amount} USDT` : amount;

  ctx.font = options.amount.font;
  ctx.fillStyle = options.amount.color;

  const textWidth = ctx.measureText(amountWithCurrency).width;
  const textPosition = {
    x: canvas.width / 2 - textWidth / 2,
    y: options.amount.position[1],
  };

  ctx.fillText(amountWithCurrency, textPosition.x, textPosition.y);
};

export const drawTime = (ctx, options, time) => {
  ctx.font = options.time.font;
  ctx.fillText(time, options.time.position[0], options.time.position[1]);
};

export const drawRoundedRect = (ctx, x, y, width, height, radius, color) => {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  ctx.fill();
};

export const drawRoundedRectangle = (
  ctx,
  x,
  y,
  width,
  height,
  borderRadius
) => {
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.moveTo(x + borderRadius, y); // Начало с верхнего левого скругленного угла
  ctx.lineTo(x + width, y); // Линия к верхнему правому углу
  ctx.lineTo(x + width, y + height); // Линия к нижнему правому углу
  ctx.lineTo(x + borderRadius, y + height); // Линия к нижнему левому скругленному углу
  ctx.quadraticCurveTo(x, y + height, x, y + height - borderRadius); // Скругление нижнего левого угла
  ctx.lineTo(x, y + borderRadius); // Линия к верхнему левому углу
  ctx.quadraticCurveTo(x, y, x + borderRadius, y); // Скругление верхнего левого угла
  ctx.closePath();
  ctx.fill();
};

export const drawBybitHashTransaction = (ctx, options) => {
  const position = options.transaction_id.position;

  ctx.fillText(generateRandomString(18), position[0], position[1]);
  ctx.fillText(generateRandomString(18), position[0], position[2]);
  ctx.fillText(generateRandomString(18), position[0], position[3]);
  ctx.fillText(generateRandomString(10), position[0], position[4]);
};

export const drawBingxHashTransaction = (ctx, options) => {
  const TXID = createCustomString();
  const position = options.transaction_id.position;

  ctx.fillText(splitText3Chunks(TXID)[0], position[0], position[1]);
  ctx.fillText(splitText3Chunks(TXID)[1], position[0], position[2]);
  ctx.fillText(splitText3Chunks(TXID)[2], position[0], position[3]);
};

export const drawHashTransaction = (ctx, options, platform) => {
  if (platform === "bybit") {
    drawBybitHashTransaction(ctx, options);
  }

  if (platform === "bingx") {
    drawBingxHashTransaction(ctx, options);
  }
};

export const drawBybitWallet = (ctx, options, wallet) => {
  const walletChunks = splitText2Chunks(wallet, 18);

  ctx.fillText(
    walletChunks[0],
    options.wallet.position[0],
    options.wallet.position[1]
  );
  ctx.fillText(
    walletChunks[1],
    options.wallet.position[0],
    options.wallet.position[2]
  );
};

export const drawBingxWallet = (ctx, options, wallet) => {
  ctx.fillText(
    splitText3Chunks(wallet)[0],
    options.wallet.position[0],
    options.wallet.position[1]
  );
  ctx.fillText(
    splitText3Chunks(wallet)[1],
    options.wallet.position[0],
    options.wallet.position[2]
  );
  ctx.fillText(
    splitText3Chunks(wallet)[2],
    options.wallet.position[0],
    options.wallet.position[3]
  );
};

export const drawWallet = (ctx, platform, options, wallet) => {
  if (platform === "bybit") {
    drawBybitWallet(ctx, options, wallet);
  }

  if (platform === "bingx") {
    drawBingxWallet(ctx, options, wallet);
  }
};
