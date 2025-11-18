import type { Request, Response } from "express";
import { AlertsService } from "./alerts.service.js";

export function getAlerts(req: Request, res: Response) {
  const alerts = AlertsService.getAll();
  return res.json(alerts);
}