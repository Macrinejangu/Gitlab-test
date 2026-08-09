
import { useState } from "react";

function ColorsAndCircles() {
  console.log("ColorsAndCircles", new Date());

  const [colors, setColors] = useState([]);

  const onSubmit = (color) => {
    const clonedColors = structuredClone(colors);

    clonedColors.push(color);
    setColors(clonedColors);
  };

  return (
    <div>
      <ColorForm onSubmit={onSubmit} />

      <ColorList
        colors={colors}
        setColors={setColors}
      />
    </div>
  );
}

function ColorForm(props) {
  console.log("ColorForm", new Date());

  const { onSubmit } = props;

  const [color, setColor] = useState("");

  const handleSubmit = () => {
    onSubmit(color);
    setColor("");
  };

  return (
    <div>
      <label>Enter Color</label>

      <input
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />

      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}

function ColorList(props) {
  console.log("ColorList", new Date());

  const { colors, setColors } = props;

  const removeColor = (indexToRemove) => {
    const updatedColors = colors.filter(
      (_, index) => index !== indexToRemove
    );

    setColors(updatedColors);
  };

  return (
    <div style={{ marginTop: "30px" }}>
      {colors.map((color, index) => (
        <div
          key={index}
          style={{
            margin: "10px",
            width: "100%",
            height: "30px",
            backgroundColor: color,
            color: "white",
            padding: "10px",
          }}
        >
          {color}

          <button onClick={() => removeColor(index)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default ColorsAndCircles;

