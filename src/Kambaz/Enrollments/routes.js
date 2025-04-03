import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
  app.delete("/api/enrollments/:enrollmentId", (req, res) => {
    const { enrollmentId } = req.params;
    const status = dao.unenrollUserInCourse(enrollmentId);
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
