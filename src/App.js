import { useState } from "react";
import Button from "./buttons";

function App() {

  const [stepCount, setStepCount] = useState(0);
  const [count, setCount] = useState(0);

  let date = new Date();
  let displayDate = date.toDateString();
  console.log(displayDate);

  return (
    <>
    <div>
      <h1>Date Counter Challenge</h1>
      <Button type={'reduce'}
              count={stepCount}
              setCount={setStepCount} />
      Step: {stepCount}
      <Button type={'add'}
              count={stepCount}
              setCount={setStepCount} />
    </div>
    <div>
    <Button type={'reduce'}
              count={count}
              setCount={setCount}
              steps={stepCount} />
      Count: {count}
      <Button type={'add'}
              count={count}
              setCount={setCount}
              steps={stepCount} />
    </div>
    <div>
      {count === 0 ? "Today is" : `${count} days from today is `} {`${displayDate}`}
    </div>
    </>
  );
}

export default App;
