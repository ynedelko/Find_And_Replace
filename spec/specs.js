describe('findReplace', function() {
  // it("has three valid inputs", function() {
  //   expect(findReplace("a", "b")).to.equal(false)
  // });
  it("will replace one word if string only has one word", function() {
    expect(findReplace("sad", "sad", "happy")).to.equal("happy")
  });
});
