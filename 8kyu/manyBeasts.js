function feast(beast, dish) {
    //your function here
      if(beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]) {
        return true
      } else {
      return false
        }
    };

///TEST
describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(feast("great blue heron", "garlic naan"), true)
  Test.assertEquals(feast("chickadee", "chocolate cake"), true)
  Test.assertEquals(feast("brown bear", "bear claw"), false)
    });
  });
  