import express from "express";
import { createMember } from "../controller/memberController.js";

const route = express.Router();

route.post('/create-member', createMember);

export default route;