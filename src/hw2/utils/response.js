export function response(res, { data = {}, status = 200, contentType = "application/json" }) {
    res.writeHead(status, { "Content-Type": contentType });
    res.write(JSON.stringify(data));
    res.end();
};

export function handleRequest(res, handler) {
  handler().catch(error =>
    response(res, { status: 400, data: { message: error.message } })
  );
}
