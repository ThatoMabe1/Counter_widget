const counterApp = () => {
  return {
    counter: 0,
    incrementCounter() {
      this.counter++;
    },
    decrementCounter() {
      this.counter--;
    }
  };
};

window.Alpine.plugin(counterApp);
