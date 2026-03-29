import express from "express";
import cors from "cors";
import cookieparser from "cookie-parser";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get("/",(req,res) => {
 res.send("Job Application Tracker API is running");
});

app.get("/health", (req,res) => {
 res.json({status: "ok"});
});

app.listen(PORT, () => {
 console.log(`Server running on port ${PORT}`);
});
