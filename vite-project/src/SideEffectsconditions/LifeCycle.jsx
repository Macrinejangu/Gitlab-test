/*
--useEffect-> effect<side effects>
--Life cycle hook
  -> get Born:rendered initally:<when component is inita>
  -> Lives:state changes:<when state changes.>
  -> Die:<componenent is removed>:<when the component gets removed>
*/

/*
1.conditional rendering.
  component gets rendered because it meets a
  certain condtions. <if statements>
*/

/*
useEffect(@param1,@param2)
@param1:required.-> call back function
@param2:dependency array: []. empty
*/

import { useEffect, useState } from "react";

function LifeCycle() {
  const [n, setN] = useState(0);

  // initial when gets born:<rendered>
  // when n changes/ [n,r,l]
  useEffect(() => {
    console.log("N has changed");
  }, [n]);

  return (
    <div>
      <div>
        <button onClick={() => setN(n - 1)}>-</button>
        <b>{n}</b>
        <button onClick={() => setN(n + 1)}>+</button>
      </div>
      <EvenOrOdd n={n} />
    </div>
  );
}

function EvenOrOdd(props) {
  const { n } = props;
  if (n % 2 === 0) {
    return <EvenComponent />;
  }
  return <OddComponet />;
}

function EvenComponent() {
  useEffect(() => {
    //Born
    console.log("Even component rendered");
  }, []);
  return (
    <div>
      <h1>Even</h1>
    </div>
  );
}

function OddComponet() {
  //empty dependency
  useEffect(() => {
    return () => {
      console.log("odd component died");
    }; //called when component dies.
  }, []);

  return (
    <div>
      <h1>Odd</h1>
    </div>
  );
}

export default LifeCycle;