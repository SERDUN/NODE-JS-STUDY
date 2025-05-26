import * as responseUtils from "../utils/response.js"

export async function notFound(req, res) {
    responseUtils.response(res, { status: 404, data: { message: "Not found" } });
};
