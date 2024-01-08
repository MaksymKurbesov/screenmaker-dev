import { Rubik, SFProDisplayBold } from "./fonts";
import {
  createCustomString,
  drawRoundedRect,
  generateRandomSevenDigitNumber,
  splitText2Chunks,
  splitText3Chunks,
} from "./helpers";

const amountInput = document.getElementById("amount");
const mobileTimeInput = document.getElementById("mobile-time");
const batteryInput = document.getElementById("battery");
const walletInput = document.getElementById("wallet");
const timeInput = document.getElementById("time");
const commissionInput = document.getElementById("commission");

export const getBingxWithdrawnIphone = (ctx, canvas) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const img = new Image();
  ctx.textAlign = "start";
  img.src = `bingx-withdrawn-iphone-template.png`;

  img.onload = function () {
    ctx.drawImage(img, 0, 0);
    const mobileTime = mobileTimeInput.value;
    const battery = batteryInput.value;
    const batteryValue = (battery / 100) * 33;
    const time =
      timeInput.value === "" ? "2023-11-20 07:40:35" : timeInput.value;
    const commission = commissionInput.value;

    drawRoundedRect(ctx, 512, 32, batteryValue, 14, 5);

    SFProDisplayBold.load().then((font) => {
      ctx.textAlign = "start";
      document.fonts.add(font);

      ctx.fillStyle = "black";
      ctx.font = "25px SF Pro Display Bold";
      ctx.fillText(mobileTime, 67, 49);
    });

    Rubik.load().then((font) => {
      document.fonts.add(font);

      ctx.fillStyle = "black";
      ctx.font = "50px Rubik";

      let amount = amountInput.value;
      let measuredText = ctx.measureText(amount);
      ctx.fillText(amount, canvas.width / 2 - measuredText.width / 2 + 7, 285);

      ctx.font = "20px Rubik";

      ctx.textAlign = "right";

      ctx.fillText(`${commission} ETH`, 561, 465);

      ctx.fillText(splitText2Chunks(walletInput.value, 28)[0], 528, 510);
      ctx.fillText(splitText2Chunks(walletInput.value, 28)[1], 528, 533);

      const TXID = createCustomString();
      ctx.fillText(splitText3Chunks(TXID)[0], 528, 624);
      ctx.fillText(splitText3Chunks(TXID)[1], 528, 647);
      ctx.fillText(splitText3Chunks(TXID)[2], 528, 670);

      ctx.fillText(generateRandomSevenDigitNumber(), 528, 715);

      ctx.fillText(time, 561, 760);
    });
  };
};
