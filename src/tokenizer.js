let charToToken = {};
let tokenToChar = {};
let nextTokenId = 1;

function ensureMapping(char) {
  if (!(char in charToToken)) {
    charToToken[char] = nextTokenId;
    tokenToChar[nextTokenId] = char;
    nextTokenId++;
  }
}

export function tokenize(text) {
  charToToken = {};
  tokenToChar = {};
  nextTokenId = 1;

  const tokens = [];
  for (let char of text) {
    ensureMapping(char);
    tokens.push(charToToken[char]);
  }
  return tokens;
}

export function detokenize(tokenArray) {
  if (!Array.isArray(tokenArray)) {
    tokenArray = tokenArray
      .toString()
      .split(",")
      .map(t => parseInt(t.trim(), 10))
      .filter(t => !isNaN(t));
  }

  return tokenArray.map(token => tokenToChar[token] || "").join("");
}

export function getMapping() {
  return Object.keys(charToToken).map(char => ({
    char,
    token: charToToken[char]
  }));
}
