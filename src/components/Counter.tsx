import { createSignal } from "solid-js";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = createSignal(0);
  return (
    <>
    <img src="/public/images/01.jpg" alt="" />
    <button class="increment" onClick={() => setCount(count() + 1)}>
      Clicks: {count()}
    </button>
    </>
    
  );
}
