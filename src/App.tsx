import { createSignal } from "solid-js";
import "./App.css";

export default function App() {
  const [count, setCount] = createSignal(0);
  return (
    <main class="flex-center size-dv flex-col gap-10 bg-slate-900 text-6xl text-mist-50 select-none">
      <h1>
        Counter: <span class="font-jet">{count()}</span>
      </h1>
      <button
        class="rounded-md bg-rose-400 px-4 py-2 text-black"
        onClick={() => setCount(count() + 1)}
      >
        Increment
      </button>
    </main>
  );
}
