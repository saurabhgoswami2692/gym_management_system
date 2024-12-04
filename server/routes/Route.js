import express from "express";
import { createMember, deleteMember, getAllMembers, updateMember } from "../controller/memberController.js";

const route = express.Router();

route.post('/create-member', createMember);
route.get('/members',getAllMembers);
route.put('/update-member/:id',updateMember);
route.post('/delete-member/:id',deleteMember);
export default route;