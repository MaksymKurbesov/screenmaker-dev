import { BaseTemplate } from "./BaseTemplate";

class BybitTemplate extends BaseTemplate {
  // Специфичные методы и свойства для Bybit
  constructor(font, position, color, data) {
    super(font, position, color);
    this.data = data; // Данные шаблона (сумма, дата и т.д.)
  }
}

class BybitDepositIphone extends BybitTemplate {
  // Специфичная логика для вывода средств с iPhone на Bybit
  constructor(font, position, color, data) {
    super(font, position, color);
    this.data = data; // Данные шаблона (сумма, дата и т.д.)
  }

  // Переопределение метода render для конкретного шаблона
  render(canvasContext) {
    // this.drawBackground(canvasContext, this.color);
    this.drawText(canvasContext, `Сумма: ${this.data.amount}`, {
      x: 10,
      y: 30,
    });
    this.drawText(canvasContext, `Дата: ${this.data.date}`, { x: 10, y: 50 });
    // Дополнительные элементы специфичные для этого шаблона
  }
}
