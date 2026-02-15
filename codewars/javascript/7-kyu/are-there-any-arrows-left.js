function anyArrows(arrows){
  // arrow it
  return arrows.some( arrows =>!arrows.damaged );
}
const assert = require('chai').assert;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(anyArrows([]), false, "Should handle empty quiver");
    assert.strictEqual(anyArrows([{range: 5}, {range: 10, damaged: true}, {damaged: true}]), true, "Should handle quiver with undamaged arrows");
    assert.strictEqual(anyArrows([{range: 10, damaged: true}, {damaged: true}]), false, "Should handle quiver with damaged arrows");
  });
});
