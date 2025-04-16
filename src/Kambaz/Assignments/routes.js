import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
  app.delete("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const status = dao.deleteAssignment(assignmentId);
    res.send(status);
  });
  app.put("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    const status = dao.updateAssignment(assignmentId, assignmentUpdates);
    res.send(status);
  });
  app.get("/api/assignments/:courseId", (req, res) => {
    const { courseId } = req.params;
    const assignments = dao.findAssignmentsForCourse(courseId);
    res.json(assignments);
  });
  app.post("/api/assignments", (req, res) => {
    const assignment = {
      ...req.body,
    };
    const newAssignment = dao.createAssignment(assignment);
    res.send(newAssignment);
  });
}
