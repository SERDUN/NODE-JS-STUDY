import http from "node:http";
import {dispatch} from "./utils/router.js";

//
// const users = getUsers();
// console.log(users);
//
//
// const createUsers = createUser({"id": "3", "name": "Creat"});
// console.log(createUsers);
//
// const userById = getUserById("1");
// console.log(userById);
//
// const updatedUser = updateUserById({"id": "1", "name": "Update"});
// console.log(updatedUser);
//
// const deleteUser = deleteUserById("1");
// console.log(deleteUser);


const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(dispatch);

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
