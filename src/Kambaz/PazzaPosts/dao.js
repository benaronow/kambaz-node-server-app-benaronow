import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

const ALL_POP_FIELDS = [
  "author",
  "folders",
  {
    path: "followUps",
    populate: [
      "author",
      {
        path: "replies",
        populate: ["author"],
      },
    ],
  },
];

const ID_POP_FIELDS = [
  "author",
  "pType",
  "folders",
  "endorser",
  {
    path: "studentAnswer",
    populate: ["author", "endorser"],
  },
  {
    path: "instructorAnswer",
    populate: ["author", "endorser"],
  },
  {
    path: "followUps",
    populate: [
      "author",
      {
        path: "replies",
        populate: ["author"],
      },
    ],
  },
];

export const createPost = async (post) => {
  const newPost = { ...post, _id: uuidv4() };
  const doc = await model.create(newPost);
  return doc.populate(["author", "folders"]);
};

export const findAllPosts = () => model.find().populate(ALL_POP_FIELDS);

export const findPostById = (postId) =>
  model.findById(postId).populate(ID_POP_FIELDS);

export const updatePost = (postId, post) =>
  model.updateOne({ _id: postId }, { $set: post });
