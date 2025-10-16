import express from "express";
import { getTransaction, createTransaction, getTransactionById, updateTransaction } from "../controllers/transactionController.js";
const router = express.Router();

// routes transactions
router.get("/" , getTransaction);
router.post("/",createTransaction);
router.get("/:id",getTransactionById);
router.patch("/:id",updateTransaction);
router.put("/:id", updateTransaction);
router.delete("/:id",  )

 const transactionRoutes = router;
 export default transactionRoutes;
