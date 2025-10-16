import express from "express"
import {getUsers, createUsers, getUerById, deleteUser} from "../controllers/usercontroller.js"
const router = express.Router();

//routes utilisateurs
router.get("/", getUsers);
router.post("/", createUsers);
router.get("/:id",getUerById );
router.delete("/:id", deleteUser) 

 const userRoutes = router;
 export default userRoutes;
