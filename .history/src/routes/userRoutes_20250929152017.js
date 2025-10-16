import express from "express"
import {getUsers, createUsers} from "../controllers/usercontroller.js"
const router = express.Router();

//routes utilisateurs
router.get("/", getUsers);
router.post("/", createUsers);

 const userRoutes = router;
 export default userRoutes;
