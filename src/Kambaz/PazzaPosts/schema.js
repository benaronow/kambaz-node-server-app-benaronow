import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    _id: String,
    text: String,
    author: { type: String, ref: "UserModel", required: true },
    date: Date,
    type: {
      type: String,
      enum: ["QUESTION", "NOTE"],
      default: "QUESTION",
    },
    title: String,
    pinned: Boolean,
    folder: {
      type: String,
      enum: [
        "HW1",
        "HW2",
        "hHW",
        "HW4",
        "HW5",
        "HW6",
        "PROJECT",
        "EXAM",
        "LOGISTICS",
        "OTHER",
        "OFFICE_HOURS",
        "",
      ],
      default: "",
    },
    views: [{ type: String, ref: "UserModel" }],
    endorser: { type: String, ref: "UserModel" },
    studentAnswer: {
      type: {
        text: String,
        author: { type: String, ref: "UserModel", required: true },
        date: Date,
        endorser: { type: String, ref: "UserModel" },
        thanks: [{ type: String, ref: "UserModel" }],
      },
    },
    instructorAnswer: {
      type: {
        text: String,
        author: { type: String, ref: "UserModel", required: true },
        date: Date,
        endorser: { type: String, ref: "UserModel" },
        thanks: [{ type: String, ref: "UserModel" }],
      },
    },
    goodNotes: [{ type: String, ref: "UserModel" }],
    followUps: [
      {
        type: {
          text: String,
          author: { type: String, ref: "UserModel", required: true },
          date: Date,
          replies: {
            type: {
              text: String,
              author: { type: String, ref: "UserModel", required: true },
              date: Date,
              helpful: [{ type: String, ref: "UserModel" }],
            },
          },
          resolved: Boolean,
          helpful: [{ type: String, ref: "UserModel" }],
        },
      },
    ],
  },
  { collection: "pazzaPosts" }
);
export default schema;
