import express from "express";
import { textMessageController,createPromptResponse } from "../controllers/messageController.js";

const messageRouter=express.Router();

messageRouter.post("/ask-ai",textMessageController);
messageRouter.post("/save",createPromptResponse);



export default messageRouter;