export class AlertsService {
  static getAll() {
    return [
      { id: 1, type: "enchente", level: "alto" },
      { id: 2, type: "deslizamento", level: "moderado" }
    ];
  }
}