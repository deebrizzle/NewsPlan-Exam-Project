import Parse from "parse";

export async function logOut() {
  try {
    await Parse.User.logOut();
    return true;
  } catch (error) {
    alert(`Error! ${error.message}`);
    return false;
  }
}
