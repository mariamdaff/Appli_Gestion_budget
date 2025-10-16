import express from "express"
import {getCategory} from "../controllers/categoryController.js"
const router = express.Router();

//routes utilisateurs
router.get("/", getCategory);
// router.post("/", createCategory);
// router.get("/:id",getCategoryById );
// router.patch("/:id", updateCategory);
// router.put("/:id", updateCategory);
// router.delete("/:id", deleteCategory) 

 const categoryRoutes = router;
 export default categoryRoutes;