import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
  app.delete("/api/enrollments", (req, res) => {
    const enrollment = {
      ...req.body,
    };
    const status = dao.unenrollUserInCourse(enrollment);
    res.send(status);
  });
  app.get("/api/enrollments", (req, res) => {
    const enrollments = dao.findEnrollments();
    res.json(enrollments);
  });
  app.post("/api/enrollments", (req, res) => {
    const enrollment = {
      ...req.body,
    };
    const newEnrollment = dao.enrollUserInCourse(enrollment);
    res.send(newEnrollment);
  });
}
