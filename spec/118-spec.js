const {Parrot, ApprenticeParrot} = require('../challenges/118.js');

describe("Challenge 118:", () => {
  it("let josh = new Parrot('Joshua'); josh.speak() should return 'Joshua want a cracker!'", () => {
    let josh = new Parrot('Joshua')
    expect(josh.speak()).toEqual('Joshua want a cracker!');
  });
  it("let marceline = new ApprenticeParrot('Marceline'); marceline.speak() should return '😴'", () => {
    let marceline = new ApprenticeParrot('Marceline')
    expect(marceline.speak()).toEqual('😴');
  });
  it("let billy = new ApprenticeParrot('Billy'); billy.speak() should return '😴'", () => {
    let billy = new ApprenticeParrot('Billy')
    expect(billy.speak()).toEqual('😴');
  });
  it("A 4th billy.speak() should return 'Billy want a cracker!'", () => {
    billy.speak();
    billy.speak();      
    expect(billy.speak()).toEqual('Billy want a cracker!');
  });
  it("Josh.talkCount should be undefined", () => {  
    expect(josh.talkCount).toEqual(undefined);
  });
});
