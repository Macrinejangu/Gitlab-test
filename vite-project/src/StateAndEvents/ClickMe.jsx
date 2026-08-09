/*
State -
so when a state changes, everywhere else that state is 
being used also changes automatically
 */

import {useStae} from "react";

function ClickMe(){

    /*
    Const [name, set<name>]=useState([initial Value])
    const [@param1. @param2]=usestate(@initialState/Starting State)
    where @param1 is the current state<integer,array.
    and param2 is the function to update the current state
     */
 const [n, setN] = useState(0);

 const increment = () => {
    setN(newN);
 };

 const decrement = () => {
    setN(n+1);
 };

 const spoiil = () =>
    setN ("Cats and Dogs");

 const reset = () => {
    setN(0);
 };

 return (
    <div>
        <h4>Clicked (n)</h4>
    <div>
    <button onCkick={increment}>Increment</button>
    <button onCkick={decrement}>Decrement</button>
    <button onCkick={spoil}>Spoil</button>
    <button onCkick={reset}>Reset</button>
    </div>
    <h4>Clicked(n)</h4>
    </div>
 )
}

export default ClickMe