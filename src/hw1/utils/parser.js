const WHITESPACE_REGEX = /\s+/g;
const BRACKET_OPEN = '[';
const BRACKET_CLOSE = ']';
const COMMA_SEPARATOR = ',';

export function deserializeArray(array) {
  return deserializeNestedArrayByRecursive(array);
}

function deserializeArrayByJSON(array) {
  return JSON.parse(array);
}

function deserializeNestedArrayByRecursive(input) {
  const trimmedInput = removeSpacesFromInput(input);
  const characters = [...trimmedInput];

  // Strip outer brackets for easier processing: "[1,2,[1,1],1]" → "1,2,[1,1],1"
  const inputCharacters = characters.slice(1, characters.length - 1);

  // Recursively parse the inner content into a nested array
  const result = deserializeArrayRecursive(inputCharacters);
  return result.array;
}

function deserializeArrayRecursive(characters, cursor = 0) {
  const result = [];
  while (cursor < characters.length) {
    const cursorChar = characters[cursor];

    // Check if a nested array starts
    if (cursorChar === BRACKET_OPEN) {
      // Skip the opening bracket for the recursive call
      cursor++;
      // Call recursively to parse the sub-array starting from the current cursor
      const nestedResult = deserializeArrayRecursive(characters, cursor);
      // The recursive call returns the parsed sub-array and the cursor after the closing bracket
      result.push(nestedResult.array);
      // Update the cursor in the parent context
      cursor = nestedResult.cursor;
    } else if (cursorChar === BRACKET_CLOSE) {
      // End of current nested array; return parsed array and current cursor +1 for skip close bracket for parrent 
      return { cursor: cursor + 1, array: result };
    } else if (cursorChar === COMMA_SEPARATOR) {
      // Skip comma
      cursor++;
    } else {
      // Try to parse a number starting from the current cursor
      // Continue until a non-numeric character is encountered
      let lookaheadIndex = cursor + 1;
      let candidateNumber = '';
      let lastSuccessCursor = cursor;
      while (lookaheadIndex <= characters.length) {
        const number = characters.slice(cursor, lookaheadIndex).join('');
        if (isNumeric(number)) {
          candidateNumber = number;
          lastSuccessCursor = lookaheadIndex;
          lookaheadIndex++;
        } else {
          break;
        }
      }

      // Push the parsed number into the current array
      result.push(parseInt(candidateNumber));
      // Update cursor to continue parsing after the number
      cursor = lastSuccessCursor + 1;
    }
  }

  return { cursor: cursor, array: result };
}

function removeSpacesFromInput(str) {
  return str.replace(WHITESPACE_REGEX, '').trim();
}

function isNumeric(str) {
  return /^\d+$/.test(str);
}

export default {
  deserializeArray,
};
