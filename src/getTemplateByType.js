import {
  drawCommission,
  drawHashTransaction,
  drawTime,
  drawWallet,
} from "./canvasDraw";
import { drawAmount, drawMobileBar } from "./canvasDraw";
import { generateRandomSevenDigitNumber, getTemplateOptions } from "./helpers";

const canvas = document.getElementById("example");
const previewCanvas = document.getElementById("preview");
const ctx = canvas.getContext("2d");
const previewCTX = previewCanvas.getContext("2d");
const timeInput = document.getElementById("time");
const mobileTimeInput = document.getElementById("mobile-time");
const walletInput = document.getElementById("wallet");

export const getTemplateByType = (type, data) => {
  const { amount, time, mobileTime, wallet, commission } = data;
  const templateOptions = getTemplateOptions(type);
  const img = new Image();
  const platform = type.split("-")[0];
  const mobileOS = type.split("-")[2];

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.textAlign = "start";

  img.src = `${type}-template.png`;

  img.onload = async () => {
    ctx.drawImage(img, 0, 0, canvas.width, 1280);

    mobileTimeInput.value = mobileTime;
    timeInput.value = time;
    walletInput.value = wallet;

    console.log("before draw mobile bar");
    await drawMobileBar(ctx, templateOptions, mobileOS, platform, mobileTime);
    console.log("after draw mobile bar");

    drawAmount(ctx, platform, templateOptions, amount);

    ctx.textAlign = "right";

    if (type.split("-")[1] === "withdrawn") {
      drawCommission(ctx, templateOptions, commission);
    }

    drawTime(ctx, templateOptions, time);
    drawWallet(ctx, platform, templateOptions, wallet);
    drawHashTransaction(ctx, templateOptions, platform);

    if (type.split("-")[0] === "bingx") {
      ctx.fillText(
        generateRandomSevenDigitNumber(),
        templateOptions.order_number.position[0],
        templateOptions.order_number.position[1]
      );
    }

    previewCTX.drawImage(canvas, 0, 0, canvas.width / 1.5, 1280 / 1.5);
  };
};
