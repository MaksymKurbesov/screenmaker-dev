import "./index.css";
import {
  addFontsToDocument,
  getCurrentDateTime,
  getDataFromUser,
  toggleInput,
} from "./helpers";
import { getTemplateByType } from "./getTemplateByType";
import { FONTS } from "./fonts";

const getScreenButton = document.getElementById("get-screen");
const downloadScreenButton = document.getElementById("download-screen");
const templateInput = document.getElementById("template");
const commissionInput = document.querySelector(".commission");

// const toggleCanvasButton = document.getElementById("toggle-canvas");
// const canvas = document.getElementById("example");

await addFontsToDocument(FONTS);

// let CANVAS_VIEW_STATUS = true;

document.fonts.ready.then(() => {
  getTemplateByType(templateInput.value, {
    amount: "",
    time: getCurrentDateTime(true),
    wallet: "TW2FSbnmHnv1PVXbuoqqQELeQck1DuoWZg",
    mobileTime: getCurrentDateTime(),
    commission: "1",
  });
});

templateInput.addEventListener("change", (e) => {
  const action = e.target.value.split("-")[1];
  const isWithdrawn = action === "withdrawn";

  toggleInput(commissionInput, isWithdrawn);

  getTemplateByType(e.target.value, getDataFromUser());
});

getScreenButton.addEventListener("click", () => {
  getTemplateByType(templateInput.value, getDataFromUser());
});

// toggleCanvasButton.addEventListener("click", () => {
//   if (CANVAS_VIEW_STATUS) {
//     canvas.style.display = "none";
//   } else {
//     canvas.style.display = "block";
//   }
//
//   CANVAS_VIEW_STATUS = !CANVAS_VIEW_STATUS;
// });

downloadScreenButton.addEventListener("click", () => {
  const canvas = document.getElementById("example");
  const data = canvas.toDataURL("image/png");
  const downloadLink = document.createElement("a");

  downloadLink.href = data;
  downloadLink.download = "screenshot.png";

  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
});
