import './index.css';

export default function Filter({
  searchTerm,
  handleSearch,
  handleClearFilter,
}) {
  return (
    <div className='filter'>
      <input
        type='text'
        value={searchTerm}
        onChange={handleSearch}
        placeholder='Search'
      />
      <button onClick={() => handleClearFilter()}>Clear</button>
    </div>
  );
}
