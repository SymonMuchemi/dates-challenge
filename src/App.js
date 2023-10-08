import { useState } from "react";
import Button from "./buttons";

const getCurrentDate = (days) => {
  let date =new Date(2027, 5, days);

  return date.toDateString();
}

function App() {

  const [stepCount, setStepCount] = useState(0);
  const [count, setCount] = useState(0);
  


  return (
    <>
    <div>
      <h1>Date Counter Challenge</h1>
        <Button type={'reduce'}
                count={stepCount}
                setCount={setStepCount} />
            <span>Step: {stepCount}</span>
        <Button type={'add'}
                count={stepCount}
                setCount={setStepCount} />      
    </div>
    <div>
    <Button type={'reduce'}
              count={count}
              setCount={setCount}
              steps={stepCount} />
            <span>Count: {count}</span>
      <Button type={'add'}
              count={count}
              setCount={setCount}
              steps={stepCount} />
    </div>
    <div>
      <h3>
        {
          count === 0 ? `Today is ${getCurrentDate(21)} `
        : `${count} days from today is ${getCurrentDate(count + 21)}`}
      </h3>
    </div>
    </>
  );
}

export default App;
