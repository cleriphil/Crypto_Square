var preEncrypt = function(message) {
  message = message.replace(/\s+/g, '')   // combine regex
  return message.replace(/[^\w\s]/g, '')
};

var squareSize = function(messageLength) {
  return Math.ceil(Math.sqrt(messageLength))
};

var preEncryptSplit = function(message) {
  var size = squareSize(message.length)
  var messagePieces = []
  for (var i = 0; i < size; i += 1) {
    messagePieces[i] = message.substring(i*size, (i+1) * size)
  }
  return messagePieces
}
