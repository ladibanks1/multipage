import {Router} from 'express';
import signup from "../controller/signup.controller.js";
const router = Router()

router.post("/createAccount" , signup.createUser )
export default router