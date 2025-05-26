import * as http from "http"
import * as url from "url"

import * as ideaController from './controllers/idea_controller.js';
import * as commonController from './controllers/common_controller.js';

http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);

    const pathname = parsedUrl.pathname;
    const method = req.method.toUpperCase();

    if (pathname === "/api/ideas" && method === "GET") {
        ideaController.getIdeas(req, res)
    } else if (pathname === "/api/ideas" && method === "POST") {
        ideaController.createIdea(req, res)
    } else if (/^\/api\/ideas\/[^\/]+$/.test(pathname) && method === "PATCH") {
        ideaController.updateIdea(req, res)
    } else if (/^\/api\/ideas\/[^\/]+$/.test(pathname) && method === "GET") {
        ideaController.getIdea(req, res)
    } else if (/^\/api\/ideas\/[^\/]+$/.test(pathname) && method === "PUT") {
        ideaController.replaceIdea(req, res)
    } else if (/^\/api\/ideas\/[^\/]+$/.test(pathname) && method === "DELETE") {
        ideaController.deleteIdea(req, res)
    } else {
        commonController.notFound(req, res)
    }
}
).listen(8080)
