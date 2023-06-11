import './index.css';

export default function Filter({
  searchTerm,
  handleSearch,
  handleClearFilter,
}) {
  return (
    <div className="filter" data-testid="filter">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search"
      />
      <button onClick={() => handleClearFilter()}>Clear</button>
    </div>
  );
}
