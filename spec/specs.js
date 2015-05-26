describe("preEncrypt", function() {
  it("deletes white space in a phrase", function() {
    expect(preEncrypt("hi there")).to.equal("hithere");
  });

  it("removes punctuation", function() {
    expect(preEncrypt("yo{u,y?o]).u!")).to.equal("youyou");
  });
});

describe("squareSize", function() {
  it("determines the size of the square", function() {
    expect(squareSize(36)).to.equal(6);
  });

  it("determines the size given a imperfect square", function() {
    expect(squareSize(37)).to.equal(7);
  });
});

describe("preEncryptSplit", function() {
  it("returns an array of strings where elements have a max length of the square root of the ceiling of the given string", function() {
    expect(preEncryptSplit("boogoohoo")[2]).to.equal("hoo");
  });
  it("returns an array of strings where elements have a max length of the square root of the ceiling of the given string", function() {
    expect(preEncryptSplit("abcdefghijklmnopqrstuvw")[1]).to.equal("fghij");
  });

  it("works without a perfect square", function() {
    expect(preEncryptSplit("Panda")[1]).to.equal("da")
  });
});

describe("encrypt", function() {
  it("encrypts 'panda'", function() {
    expect(encrypt(["pan", "dan"])).to.equal("pdaann")
  })

  it("encrypts 'portlandiscool'", function() {
    expect(encrypt(["port", "land", "isco", "ol"])).to.equal("pliooaslrnctdo")
  })
});
