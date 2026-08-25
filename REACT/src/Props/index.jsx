function Parent() {
  // Primitive Data Types
  const str = "Hello World";
  const amount = 2000;
  const isOk = true;
  const notSet = null;

  // Non-Primitive Data Types
  const fruits = ["Apple", "Banana", "Orange"];

  const student = {
    name: "Rachell",
    age: 22,
    country: "Kenya",
  };

  function greet() {
    alert("Hello from Parent!");
  }

  return (
    <div>
      <h1>I am the Parent Component</h1>

      <h2>Child Component (Using props)</h2>

      <Child
        str={str}
        amountInNumber={amount}
        isOk={isOk}
        notSet={notSet}
        fruits={fruits}
        student={student}
        greet={greet}
      />

      <hr />

      <h2>Child1 Component (Using Destructuring)</h2>

      <Child1
        str={str}
        amountInNumber={amount}
        isOk={isOk}
        notSet={notSet}
        fruits={fruits}
        student={student}
        greet={greet}
      />

      <hr />

      <h2>Child2 Component (inside the function body)</h2>

      <Child1
        str={str}
        amountInNumber={amount}
        isOk={isOk}
        notSet={notSet}
        fruits={fruits}
        student={student}
        greet={greet}
      />
    </div>
  );
}

// Access properties through props
function Child(props) {
  console.log(props);

  return (
    <div
      style={{
        border: "2px solid gray",
        padding: "20px",
        marginTop: "20px",
      }}
    >
      <h2>I am the Child Component</h2>

      <ul>
        <li>
          Favourite String: <b>{props.str}</b>
        </li>

        <li>
          Amount: <b>{props.amountInNumber}</b>
        </li>

        <li>
          Boolean: <b>{String(props.isOk)}</b>
        </li>

        <li>
          Null Value: <b>{String(props.notSet)}</b>
        </li>

        <li>
          Student Name: <b>{props.student.name}</b>
        </li>

        <li>
          Student Age: <b>{props.student.age}</b>
        </li>

        <li>
          Student Country: <b>{props.student.country}</b>
        </li>

        <li>
          Fruits:
          <ul>
            {props.fruits.map((fruit) => (
              <li key={fruit}>{fruit}</li>
            ))}
          </ul>
        </li>
      </ul>

      <button onClick={props.greet}>Click Me</button>
    </div>
  );
}

// Destructure directly in the parameter list
function Child1({ str, amountInNumber, isOk, notSet, fruits, student, greet }) {
  return (
    <div>
      <h2>I am the Child Component</h2>

      <ul>
        <li>
          Favourite String: <b>{str}</b>
        </li>

        <li>
          Amount: <b>{amountInNumber}</b>
        </li>

        <li>
          Boolean: <b>{String(isOk)}</b>
        </li>

        <li>
          Null Value: <b>{String(notSet)}</b>
        </li>

        <li>
          Student Name: <b>{student.name}</b>
        </li>

        <li>
          Student Age: <b>{student.age}</b>
        </li>

        <li>
          Student Country: <b>{student.country}</b>
        </li>

        <li>
          Fruits:
          <ul>
            {fruits.map((fruit) => (
              <li key={fruit}>{fruit}</li>
            ))}
          </ul>
        </li>
      </ul>

      <button onClick={greet}>Click Me</button>
    </div>
  );
}

// Destructure inside the function body
function Child2(props) {
  const { str, amountInNumber, isOk, notSet, fruits, student, greet } = props;

  return (
    <div>
      <h2>I am the Child Component</h2>

      <ul>
        <li>
          Favourite String: <b>{str}</b>
        </li>

        <li>
          Amount: <b>{amountInNumber}</b>
        </li>

        <li>
          Boolean: <b>{String(isOk)}</b>
        </li>

        <li>
          Null Value: <b>{String(notSet)}</b>
        </li>

        <li>
          Student Name: <b>{student.name}</b>
        </li>

        <li>
          Student Age: <b>{student.age}</b>
        </li>

        <li>
          Student Country: <b>{student.country}</b>
        </li>

        <li>
          Fruits:
          <ul>
            {fruits.map((fruit) => (
              <li key={fruit}>{fruit}</li>
            ))}
          </ul>
        </li>
      </ul>

      <button onClick={greet}>Click Me</button>
    </div>
  );
}

export default Parent;