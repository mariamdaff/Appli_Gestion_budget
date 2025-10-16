import express from "express";
import { getTransaction } from "../controllers/transactionController";
const router = express.Router();

// routes transactions
router.get("/" , getTransaction);

 const transactionRoutes = router;
 export default transactionRoutes;
