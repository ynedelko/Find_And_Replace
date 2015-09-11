
var findReplace = function(string, word, replaceWith) {
  return string.replace(new RegExp(word, 'gi'), replaceWith);
};

$(document).ready(function() {
  $("form#find-and-replace").submit(function(event) {
    var string = ($('input#string').val());
    var word = ($('input#word').val());
    var replaceWith = ($('input#replaceWith').val());
    var output = findReplace(string, word, replaceWith);

    $(".input").text(string);
    $(".output").text(output);

    $("#result").show();
    event.preventDefault();
  });
});
