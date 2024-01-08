import { TEXT_OPTIONS } from "../TEXT_OPTIONS";

export class BaseTemplate {
  constructor(font, position, color) {
    this.font = font;
    this.position = position;
    this.color = color;
  }

  drawText(ctx, value, options) {
    ctx.font = options.font;
    ctx.fillText(value, options.x, options.y);

    // ctx.textAlign = "start";
    //
    // ctx.fillStyle = batteryOptions.color;
    // ctx.font = batteryOptions.font;
    // ctx.fillText(battery, batteryOptions.x, batteryOptions.y);
  }

  updateData(data) {}

  // Общий метод для отрисовки шаблона
  render(ctx) {
    // Общая логика отрисовки
  }
}
