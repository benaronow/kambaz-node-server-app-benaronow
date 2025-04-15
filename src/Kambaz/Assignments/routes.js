import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
  const findDbAssignments = async (req, res) => {
    const { courseId } = req.params;
    const assignments = await dao.findAssignmentsForCourse(courseId);
    res.json(assignments);
  };

  const createDbAssignment = async (req, res) => {
    const assignment = {
      ...req.body,
    };
    const newAssignment = await dao.createAssignment(assignment);
    res.send(newAssignment);
  };

  const updateDbAssignment = async (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    const status = await dao.updateAssignment(assignmentId, assignmentUpdates);
    res.send(status);
  };

  const deleteDbAssignment = async (req, res) => {
    const { assignmentId } = req.params;
    const status = await dao.deleteAssignment(assignmentId);
    res.send(status);
  };

  app.get("/api/assignments/:courseId", findDbAssignments);
  app.post("/api/assignments", createDbAssignment);
  app.put("/api/assignments/:assignmentId", updateDbAssignment);
  app.delete("/api/assignments/:assignmentId", deleteDbAssignment);
}
