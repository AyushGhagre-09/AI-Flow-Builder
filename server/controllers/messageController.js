import openRouter from "../configs/openRouter.js";
import Prompt from "../models/Prompt.js";
import sanitizeHtml from "sanitize-html";


export const textMessageController = async (req, res) => {
   try {
      const { prompt } = req.body;
      if (!prompt) {
         res.status(400).send("Missing required field: prompt.");
         return;
      }

      const completion = await openRouter.chat.send({
         model: 'mistralai/mistral-7b-instruct:free',
         messages: [
            {
               role: 'user',
               content: prompt,
            },
         ],

      });

      const { content } = completion.choices[0].message;
      console.log(content);
      let answer = sanitizeHtml(content, {
         allowedTags: [],
         allowedAttributes: {},
         disallowedTagsMode: "discard"

      });
      answer = answer.replace(/\[(\/)?[a-zA-Z_]{1,20}\]/g, "");
      answer = answer.replace(/\s+/g, " ").trim();


      res.status(200).json({ success: true, answer });
   } catch (error) {
      res.status(500).json({ success: false, message: error.message });
   }

}

export const createPromptResponse = async (req, res) => {
   try {
      const { prompt, response } = req.body;
      if (!prompt || !response) {
         res.status(400).send("Missing required field: prompt or response.");
         return;
      }
      await Prompt.create({ prompt, response });
      res.status(201).json({ success: true, message: "Saved Successfully" });
   } catch (error) {
      res.status(500).json({ success: false, message: error.message });
   }
};

