import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function findEnrollments() {
  return Database.enrollments;
}
export function enrollUserInCourse(enrollment) {
  const { enrollments } = Database;
  const newEnrollment = {
    _id: uuidv4(),
    user: enrollment.user,
    course: enrollment.course,
  };
  enrollments.push(newEnrollment);
  return newEnrollment;
}
export function unenrollUserInCourse(enrollmentId) {
  const { enrollments } = Database;
  Database.enrollments = enrollments.filter((e) => e._id !== enrollmentId);
}
