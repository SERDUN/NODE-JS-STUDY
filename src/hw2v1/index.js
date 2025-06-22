import {createUser, deleteUserById, getUserById, getUsers, updateUserById} from "./services/users.service.js";

const users = getUsers();
console.log(users);


const createUsers = createUser({"id": "3", "name": "Creat"});
console.log(createUsers);

const userById = getUserById("1");
console.log(userById);

const updatedUser = updateUserById({"id": "1", "name": "Update"});
console.log(updatedUser);

const deleteUser = deleteUserById("1");
console.log(deleteUser);
