import Filter from '.';
import { render, fireEvent, screen } from '@testing-library/react';

describe('Filter', () => {
  it('should the Filter component exported correctly', () => {
    expect(Filter).toBeDefined();
  });

  it('should render the input field and clear button', () => {
    const { getByPlaceholderText, getByText } = render(
      <Filter
        searchTerm=""
        handleSearch={() => {}}
        handleClearFilter={() => {}}
      />,
    );

    const inputElement = getByPlaceholderText('Search');
    const clearButton = getByText('Clear');

    expect(inputElement).toBeInTheDocument();
    expect(clearButton).toBeInTheDocument();
  });

  it('should call handleSearch on input change', () => {
    const handleSearchMock = jest.fn();
    const { getByPlaceholderText } = render(
      <Filter
        searchTerm=""
        handleSearch={handleSearchMock}
        handleClearFilter={() => {}}
      />,
    );

    const inputElement = getByPlaceholderText('Search');
    fireEvent.change(inputElement, { target: { value: 'test' } });

    expect(handleSearchMock).toHaveBeenCalledTimes(1);
  });
});
