function FilterList({ title, options }) {
  return (
    <div className="filter">
      <h3>{title}</h3>

      {options.map((option) => (
        <label key={option} className="filter-item">
          <input type="checkbox" />
          {option}
        </label>
      ))}
    </div>
  );
}

export default FilterList;