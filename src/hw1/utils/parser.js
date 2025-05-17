export function deserializeArray(array) {
  return deserializeArrayByJSON(array);
}

function deserializeArrayByJSON(array) {
  return JSON.parse(array);
}

export default {
  deserializeArray,
};
