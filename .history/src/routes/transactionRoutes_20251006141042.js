import express from "express";
import { getTransaction, createTransaction } from "../controllers/transactionController.js";
const router = express.Router();

// routes transactions
router.get("/" , getTransaction);
router.post("/",createTransaction);
// router.get("/:id", );
// router.patch("/:id", );
// router.put("/:id", );
// router.delete("/:id", )

 const transactionRoutes = router;
 export default transactionRoutes;
