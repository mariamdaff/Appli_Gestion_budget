import express from "express"
import {getUsers} from "../controllers/usercontroller.js"
const router = express.Router();

//routes utilisateurs
router.get("/", getUsers);
