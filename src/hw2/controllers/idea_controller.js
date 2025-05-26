import * as service from "../services/idea_service.js"
import * as responseUtils from "../utils/response.js"
import * as requestUtils from "../utils/request.js"

export async function createIdea(req, res) {
    responseUtils.handleRequest(res, async () => {
        const body = await requestUtils.parseJsonBody(req);
        console.log(`Body: ${body.title}`);
        const idea = service.createIdea(body.title, body.description);
        responseUtils.response(res, { data: idea, status: 201 });
    })
};

export async function replaceIdea(req, res) {
    responseUtils.handleRequest(res, async () => {
        const id = extractIdeaId(req);
        const body = await requestUtils.parseJsonBody(req);
        console.log(`Body: ${body.title}`);
        const idea = service.replaceIdea(id, body.title, body.description);
        responseUtils.response(res, { data: idea, status: 201 });
    })
};

export async function deleteIdea(req, res) {
    responseUtils.handleRequest(res, async () => {
        const id = extractIdeaId(req);
        service.deleteIdea(id)
        responseUtils.response(res, { status: 201 });
    });
}

export async function getIdeas(req, res) {
    responseUtils.handleRequest(res, async () => {
        const idea = service.getIdeas();
        responseUtils.response(res, { data: idea, status: 201 });
    });
}

export async function getIdea(req, res) {
    responseUtils.handleRequest(res, async () => {
        const id = extractIdeaId(req);
        const idea = service.getIdea(id);
        responseUtils.response(res, { data: idea, status: 201 });
    });
}

export async function updateIdea(req, res) {
    responseUtils.handleRequest(res, async () => {
        const id = extractIdeaId(req);
        const body = await requestUtils.parseJsonBody(req);
        const idea = service.updateIdea(id, body.title, body.description);
        responseUtils.response(res, { data: idea, status: 201 });
    });
}

function extractIdeaId(req) {
    const pathname = new URL(req.url, `http://${req.headers.host}`).pathname;
    const match = pathname.match(/^\/api\/ideas\/([^\/]+)$/);

    if (!match || !match[1]) {
        throw new Error('Invalid idea ID in URL');
    }

    return match[1];
}
