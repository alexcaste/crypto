describe ('cryptograph', function() {
  it("will return a coded message from an input of one letter", function() {
    expect(cryptograph("h")).to.equal("h");
  });

    it("will return a coded message from an input of three letters", function() {
    expect(cryptograph("cat")).to.equal("cta")
  });
});
