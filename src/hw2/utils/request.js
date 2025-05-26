export function parseJsonBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];

    req.on('data', chunk => chunks.push(chunk));
    req.on('end', () => {
      try {
        const bodyStr = Buffer.concat(chunks).toString();
        const body = JSON.parse(bodyStr);
        resolve(body);
      } catch (err) {
        reject(err);
      }
    });
    req.on('error', reject);
  });
}
