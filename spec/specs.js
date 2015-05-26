describe("preEncrypt", function() {
  it("deletes the punctuation and spaces of a phrase", function() {
    expect(preEncrypt("hi there")).to.equal("hithere");
  });
});
