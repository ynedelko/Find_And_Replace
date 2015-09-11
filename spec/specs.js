describe('findReplace', function() {
  it("will replace one word if string only has one word", function() {
    expect(findReplace("sad", "sad", "happy")).to.equal("happy")
  });
  it("will replace a word if the string has more than one word", function() {
    expect(findReplace("happy or sad", "sad", "unhappy")).to.equal("happy or unhappy")
  });
});
