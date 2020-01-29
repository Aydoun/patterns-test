class Strategy {
  currentStrategy: string;
  allStrategies: Array<String>;

  constructor(strategy: string = "Ideal") {
    this.currentStrategy = strategy;
    this.allStrategies = [];
  }

  get CurrentStrategy() {
    return this.currentStrategy;
  }

  setStrategy(newStrategy: string): string {
    this.currentStrategy = newStrategy;
    return this.currentStrategy;
  }

  get AllStrategies() {
    return this.allStrategies;
  }
}

module.exports = Strategy;
