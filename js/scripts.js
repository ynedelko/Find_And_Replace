
var findReplace = function(string, word, replaceWith) {
  var newString = "";
  newString = string.replace(new RegExp(word, 'g'), replaceWith);
  return newString;
};
