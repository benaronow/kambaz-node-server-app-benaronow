import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import session from "express-session";
import Hello from "./src/Hello.js";
import Lab5 from "./src/Lab5/index.js";
import UserRoutes from "./src/Kambaz/Users/routes.js";
import CourseRoutes from "./src/Kambaz/Courses/routes.js";
import ModuleRoutes from "./src/Kambaz/Modules/routes.js";
import AssignmentRoutes from "./src/Kambaz/Assignments/routes.js";
import EnrollmentRoutes from "./src/Kambaz/Enrollments/routes.js";
import PazzaPostRoutes from "./src/Kambaz/PazzaPosts/routes.js";
import PazzaFolderRoutes from "./src/Kambaz/PazzaFolders/routes.js";

const CONNECTION_STRING =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/kambaz";
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(
  cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:5173",
  })
);
const sessionOptions = {
  secret: process.env.SESSION_SECRET || "kambaz",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    domain: process.env.NODE_SERVER_DOMAIN,
  };
}
app.use(session(sessionOptions));
app.use(express.json());
Lab5(app);
Hello(app);
UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
EnrollmentRoutes(app);
PazzaPostRoutes(app);
PazzaFolderRoutes(app);
app.listen(process.env.PORT || 4000);
