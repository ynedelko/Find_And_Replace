describe('findReplace', function() {
  it("has three valid inputs", function() {
    expect(findReplace("hello world", "universe", "hello universe")).to.equal(true)
  });
});
