describe('findReplace', function() {
  it("will replace one word if string only has one word", function() {
    expect(findReplace("sad", "sad", "happy")).to.equal("happy")
  });
  it("will replace a word if the string has more than one word", function() {
    expect(findReplace("happy or sad", "sad", "unhappy")).to.equal("happy or unhappy")
  });
  it("will replace all occurrences of the word in the string", function() {
    expect(findReplace("happy or sad or very sad", "sad", "unhappy")).to.equal("happy or unhappy or very unhappy")
  });
  it("will consider special characters", function() {
    expect(findReplace("Are you happy or sad or very sad?", "sad", "unhappy")).to.equal("Are you happy or unhappy or very unhappy?")
  });
  it("will replace word even if it's capitalized", function() {
    expect(findReplace("Is this making you sad, yes Sad, SAD?!", "sad", "happy")).to.equal("Is this making you happy, yes happy, happy?!")
  });
});
