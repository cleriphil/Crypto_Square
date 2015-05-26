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
  };
  return messagePieces
};

var encrypt = function(messagePieces) {
  // debugger;
  var encryptedMessage = ""
  for(var i = 0; i < messagePieces[0].length; i += 1) {
    messagePieces.forEach(function(piece) {
      if (piece[i]) {
        encryptedMessage += piece[i]
      }
    });
  };
  return encryptedMessage
};
