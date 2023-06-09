import { useState, useMemo } from 'react';

export default function useSearchFilter(items) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
  };

  const handleClearFilter = () => {
    setSearchTerm('');
  };

  useMemo(() => {
    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filteredItems);
  }, [items, searchTerm]);

  return {
    searchTerm,
    handleSearch,
    filteredItems,
    handleClearFilter,
  };
}
