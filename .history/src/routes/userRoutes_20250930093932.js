import express from "express"
import {getUsers, createUsers, getUerById,updateUser, deleteUser} from "../controllers/usercontroller.js"
const router = express.Router();

//routes utilisateurs
router.get("/", getUsers);
router.post("/", createUsers);
router.get("/:id",getUerById );
router.put("/:id", updateUser);
router.delete("/:id", deleteUser) 

 const userRoutes = router;
 export default userRoutes;
