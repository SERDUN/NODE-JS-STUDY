import {deleteUserById, getUserById, updateUserById} from "../../../../services/index.js";

export async function get(req, res) {
	const id = Number(req.params.id);
	const user = getUserById(id);

	res.writeHead(200, {'Content-Type': 'application/json'});
	res.end(JSON.stringify(user));
}

export async function put(req, res) {
	const id = Number(req.params.id);
	let body = '';

	try {
		const data = JSON.parse(body);
		const updatedUsers = updateUserById(id, {id, name: data.name});
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end(JSON.stringify(updatedUsers));
	} catch (err) {
		res.writeHead(400, {'Content-Type': 'application/json'});
		res.end(JSON.stringify({error: 'Invalid JSON'}));
	}
}

export async function delete_(req, res) {
	const id = Number(req.params.id);

	try {
		deleteUserById(id);
		res.writeHead(204);
		res.end();
	} catch (err) {
		res.writeHead(500, {'Content-Type': 'application/json'});
		res.end(JSON.stringify({error: 'Server error'}));
	}
}
