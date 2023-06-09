import Filter from '../components/filter';
import useSearchFilter from '../hooks/useSearchFilter';

const withFilterInput = (WrappedComponent, items, loading) => {
  return (props) => {
    const { searchTerm, filteredItems, handleSearch, handleClearFilter } =
      useSearchFilter(items);
    return (
      <>
        <Filter
          searchTerm={searchTerm}
          handleSearch={handleSearch}
          handleClearFilter={handleClearFilter}
        />
        <WrappedComponent
          searchTerm={searchTerm}
          items={items}
          filteredItems={filteredItems}
          loading={loading}
          {...props}
        />
      </>
    );
  };
};

export default withFilterInput;
