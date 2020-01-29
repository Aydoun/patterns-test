const expect = require("expect");
const StrategyPattern = require("./");

describe("Strategy Pattern", () => {
  const defaultStrategy = "Ideal";

  context("Object Setup", () => {
    it("it should set the default strategy to Ideal", () => {
      const str = new StrategyPattern();

      expect(str.CurrentStrategy).toEqual("Ideal");
    });

    it("it should return the current strategy", () => {
      const str = new StrategyPattern(defaultStrategy);

      expect(str.CurrentStrategy).toEqual(defaultStrategy);
    });

    it("it should set a new strategy", () => {
      const str = new StrategyPattern(defaultStrategy);

      str.setStrategy("paypal");
      expect(str.CurrentStrategy).toEqual("paypal");
    });
  });

  context("Pattern's Data Manipulation", () => {
    it("it should list all the available strategies", () => {
      const str = new StrategyPattern(defaultStrategy);
  
      expect(str.AllStrategies).toBeDefined();
      expect(str.AllStrategies.length).toBeGreaterThanOrEqual(0);
    });
  });
});
