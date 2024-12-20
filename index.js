import express from 'express';
import Hello from "./Hello.js"
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import "dotenv/config";
import session from "express-session";
import UserRoutes from "./Kanbas/Users/routes.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from './Kanbas/Modules/routes.js';
import AssignmentRoutes from "./Kanbas/Assignments/routes.js";
import EnrollementsRoutes from './Kanbas/Enrollments/route.js';
const app = express();
console.log(process.env.NETLIFY_URL)
app.use(
    cors({
        credentials: true,
        origin: process.env.NETLIFY_URL || "http://localhost:3000" || 
        "https://a5--wonderful-cannoli-5646c0.netlify.app",
    })
);
const sessionOptions = {
    secret: process.env.SESSION_SECRET || "kanbas",
    resave: false,
    saveUninitialized: false
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
        //domain: process.env.NODE_SERVER_DOMAIN,
    };
}
app.use(session(sessionOptions));

app.use(express.json());
Lab5(app)
Hello(app)
UserRoutes(app)
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
EnrollementsRoutes(app);
app.listen(process.env.PORT || 4000)