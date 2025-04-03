import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function findEnrollments() {
  return Database.enrollments;
}
export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
}
export function unenrollUserInCourse(enrollment) {
  const { enrollments } = Database;
  Database.enrollments = enrollments.filter(
    (e) => !(e.user === enrollment.user && e.course === enrollment.course)
  );
}
