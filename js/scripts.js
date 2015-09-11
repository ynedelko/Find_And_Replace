
var findReplace = function(string, word, replaceWith) {
  return string.replace(new RegExp(word, 'g'), replaceWith);
};
