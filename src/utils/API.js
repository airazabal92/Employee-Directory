import axios from "axios";
// This is the api you will be referencing. No need to make changes to this file!
export default {
  // Gets all users
  getUsers: function () {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  }
};
