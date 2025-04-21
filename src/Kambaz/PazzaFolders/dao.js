import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

export const createFolder = async (folder) => {
  const newFolder = { _id: uuidv4(), name: folder.name };
  return model.create(newFolder);
};

export const findAllFolders = () => model.find();

export const findFolderByName = (folder) =>
  model.findOne({ name: folder.name });

export const updateFolder = (folderId, folder) =>
  model.updateOne({ _id: folderId }, { $set: folder });

export function deleteFolder(folderId) {
  return model.deleteOne({ _id: folderId });
}
