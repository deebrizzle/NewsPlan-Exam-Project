import * as fs from "fs/promises";

const DATA_FILE = "./data.json"

// example function for users. 
export async function getAllUsers() {
    try {
      let dataTxt = await fs.readFile(DATA_FILE);
      let data = JSON.parse(dataTxt);
      let users = data[2].users; //CHANGE [2] DEPENDS ON JSON DATABASE IMPLEMENTATION
      return users;
    } catch (err) {
      if (err.code === "ENOENT") {
        // file does not exits
        await save([]); // create a new file with ampty array
        return []; // return empty array
      } // // cannot handle this exception, so rethrow
      else throw err;
    }
  }
  