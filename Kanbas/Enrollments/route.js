import * as dao from "./dao.js";
export default function EnrollementsRoutes(app) {
    app.delete("/api/enrollments/:courseId", (req, res) => {
        const { courseId } = req.params;
        console.log(req.session);
        const currentUser = req.session["currentUser"];
        console.log("currentUser", currentUser);
        const status = dao.unenrollCourse(courseId, currentUser._id);
        res.send(status);
    });
    app.post("/api/enrollments/:courseId", (req, res) => {
        const { courseId } = req.params;
        console.log(req.session);
        const currentUser = req.session["currentUser"];
        console.log("currentUser", currentUser);
        dao.enrollUserInCourse(currentUser._id, courseId);
        res.send(200);
    });
}