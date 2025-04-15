import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

export async function findAssignmentsForCourse(courseId) {
  const assignments = await model.find();
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return courseAssignments;
}

export function createAssignment(assignment) {
  const newAssignment = { ...assignment, _id: uuidv4() };
  return model.create(newAssignment);
}

export function deleteAssignment(assignmentId) {
  return model.deleteOne({ _id: assignmentId });
}

export function updateAssignment(assignmentId, assignmentUpdates) {
  return model.updateOne({ _id: assignmentId }, { $set: assignmentUpdates });
}
