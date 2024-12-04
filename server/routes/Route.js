import express from "express";
import { createMember } from "../controller/memberController.js";

const route = express.Router();

// added routes
route.post('/create-member', createMember);

export default route;