export function dispatch(request, response) {
	const {url} = request;
	const [path] = url.split('?');

	if (path === '/users') {
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.end('Hello World!');
	} else {
		response.writeHead(404, {'Content-Type': 'text/plain'});
		response.end('Not Found');
	}
}
