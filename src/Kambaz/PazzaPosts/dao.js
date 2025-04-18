import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

const POP_FIELDS = [
  "author",
  "type",
  "folder",
  "endorser",
  {
    path: "studentAnswer",
    populate: ["author", "endorser", "thanks"],
  },
  {
    path: "instructorAnswer",
    populate: ["author", "endorser", "thanks"],
  },
  {
    path: "followUps",
    populate: [
      "author",
      {
        path: "replies",
        populate: ["author", "helpful"],
      },
      "helpful",
    ],
  },
];

export const createPost = (post) => {
  const newPost = { ...post, _id: uuidv4() };
  return model.create(newPost);
};

export const findAllPosts = () => model.find().populate(POP_FIELDS);

export const findPostById = (postId) =>
  model.findById(postId).populate(POP_FIELDS);

export const updatePost = (postId, post) =>
  model.updateOne({ _id: postId }, { $set: post });
