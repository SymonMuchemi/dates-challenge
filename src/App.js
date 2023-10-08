import { useState } from "react";
import Button from "./buttons";

function App() {

  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Date counter challenge</h1>
      <Button type={'reduce'}
              count={count}
              setCount={setCount} />
      Step: {count}
      <Button type={'add'}
              count={count}
              setCount={setCount} />
    </>
  );
}

export default App;
