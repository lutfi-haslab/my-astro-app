import { testStore } from "../store";

export default function ReactCounter() {
  const bears = testStore((state) => state.bears);
  const increasePopulation = testStore((state) => state.increasePopulation);

  return (
    <div id="react">
      <button onClick={increasePopulation}>one up</button>
      <h1>{bears} around here ...</h1>
    </div>
  );
}
