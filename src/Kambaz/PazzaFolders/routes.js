import * as dao from "./dao.js";

export default function PazzaFolderRoutes(app) {
  const createFolder = async (req, res) => {
    const folder = await dao.findFolderByName(req.body);
    if (folder) {
      res.status(400).json({ message: "Folder already exists" });
      return;
    }
    const newFolder = await dao.createFolder(req.body);
    res.json(newFolder);
  };

  const findAllFolders = async (req, res) => {
    const posts = await dao.findAllFolders();
    res.json(posts);
  };

  const updateFolder = async (req, res) => {
    const { folderId } = req.params;
    const folderUpdates = req.body;
    const updatedFolder = await dao.updateFolder(folderId, folderUpdates);
    res.json(updatedFolder);
  };

  const deleteFolder = async (req, res) => {
    const { folderId } = req.params;
    const status = await dao.deleteFolder(folderId);
    res.send(status);
  };

  app.post("/api/pazzaFolders", createFolder);
  app.get("/api/pazzaFolders", findAllFolders);
  app.put("/api/pazzaFolders/:folderId", updateFolder);
  app.delete("/api/pazzaFolders/:folderId", deleteFolder);
}
