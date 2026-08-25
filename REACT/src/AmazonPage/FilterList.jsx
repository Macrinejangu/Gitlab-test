function FilterList() {
  return (
    <div className="filter">
      <h3 className="filter-title">Condition</h3>

      <label className="filter-item">
        <input type="checkbox" />
        <span>New</span>
      </label>

      <label className="filter-item">
        <input type="checkbox" />
        <span>Renewed</span>
      </label>

      <label className="filter-item">
        <input type="checkbox" />
        <span>Used</span>
      </label>
    </div>
  );
}

export default FilterList;