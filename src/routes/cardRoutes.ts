import { Router } from "express";
import { validateCard } from "../controllers/cardController";

const router: Router = Router();

router.post("/validate-card", validateCard);

export default router;
