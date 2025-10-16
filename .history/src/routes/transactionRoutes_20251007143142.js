import express from "express";
import { getTransaction, createTransaction, getTransactionById, updateTransaction } from "../controllers/transactionController.js";
import { updateCategory } from "../controllers/categoryController.js";
const router = express.Router();

// routes transactions
router.get("/" , getTransaction);
router.post("/",createTransaction);
router.get("/:id",getTransactionById);
router.patch("/:id",updateTransaction);
// router.put("/:id", );
// router.delete("/:id", )

 const transactionRoutes = router;
 export default transactionRoutes;
