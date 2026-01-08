import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDb from "./configs/db.js";
import messageRouter from "./routes/messageRoutes.js";
const app = express();

await connectDb();

// middleware
app.use(cors());
app.use(express.json());
app.use("/api/message",messageRouter);


app.get("/", (req, res) => {
    res.send("Server is Live!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
