import * as userModel from "..models/user.model.js"

//example functions
export async function getAllUsers(req, res) {
    try {
        let allUsers = await userModel.getAllUsers();
        res.statusMessage = `RETRIEVED USERS`
        res.json(allUsers);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  export async function getUser(req, res) {
    try {
      let id = req.params.userEmail
      let user = await userModel.getUserById(id);
      res.statusMessage = `RETRIEVED USER (${id})`
      res.json(user);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }