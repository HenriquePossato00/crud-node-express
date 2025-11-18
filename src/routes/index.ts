import { Router } from "express";
import alertsRoutes from "../modules/alerts/alerts.routes.js";

const router = Router();

router.use("/alerts", alertsRoutes);

router.get("/", (req, res) => {
  res.json({ message: "API online!" });
});

export default router;