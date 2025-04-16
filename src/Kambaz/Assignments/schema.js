import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema(
  {
    _id: String,
    title: String,
    description: String,
    points: Number,
    course: String,
    group: String,
    startMonth: String,
    startDay: String,
    endMonth: String,
    endDay: String,
    untilMonth: String,
    untilDay: String,
  },
  { collection: "assignments" }
);
export default assignmentSchema;
