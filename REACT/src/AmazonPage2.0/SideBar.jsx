import FilterList from "./FilterList";

function SideBar() {
  return (
    <div className="sidebar">
      <FilterList
        title="Condition"
        options={["New", "Used", "Renewed"]}
      />

      <FilterList
        title="Material"
        options={[
          "Plastic",
          "Rubber",
          "PVC",
          "Steel",
          "Aluminium",
        ]}
      />

      <FilterList
        title="Uses"
        options={[
          "Exercise",
          "Speed And Endurance",
          "Boxing",
          "Body Building",
          "Martial Arts",
        ]}
      />

      <FilterList
        title="Brand"
        options={[
          "Cross Rope",
          "Venum",
          "SportBit",
          "Canon Sport",
          "Adidas",
        ]}
      />
    </div>
  );
}

export default SideBar;