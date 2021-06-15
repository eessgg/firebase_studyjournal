import express from "express";
import { currentUser } from "../controllers/auth_controller";

const router = express.Router();

router.get("/current-user", currentUser);

module.exports = router;
