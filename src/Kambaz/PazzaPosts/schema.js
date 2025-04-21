import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    _id: String,
    text: String,
    author: { type: String, ref: "UserModel", required: true },
    date: Date,
    pType: {
      type: String,
      enum: ["QUESTION", "NOTE"],
      default: "QUESTION",
    },
    for: {
      type: String,
      enum: ["ALL", "INSTRUCTORS"],
      default: "ALL",
    },
    title: String,
    pinned: Boolean,
    folders: [
      {
        type: String,
        ref: "PazzaFolderModel",
      },
    ],
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
          replies: [
            {
              type: {
                text: String,
                author: { type: String, ref: "UserModel", required: true },
                date: Date,
                helpful: [{ type: String, ref: "UserModel" }],
              },
            },
          ],
          resolved: Boolean,
          helpful: [{ type: String, ref: "UserModel" }],
        },
      },
    ],
  },
  { collection: "pazzaPosts" }
);
export default schema;
