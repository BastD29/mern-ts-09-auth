import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { ALLOWED_ORIGIN, NODE_ENV, PORT } from "./config/environments";
import auth from "./routes/auth";
import { connectDB } from "./config/db";
import session from "./config/session";

connectDB();

const app = express();

const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    if (
      !origin ||
      origin.includes("Postman") ||
      (ALLOWED_ORIGIN as string).includes(origin)
    ) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session);

app.use("/", auth);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}, ${NODE_ENV} environment`);
});
