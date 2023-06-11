import Characters from '.';
import { render, screen, fireEvent } from '@testing-library/react';
import { useCharacters, useCounter, useScrollTop, useLastViewed } from '@hooks';

jest.mock('@hooks', () => ({
  useCharacters: jest.fn(),
  useCounter: jest.fn(),
  useScrollTop: jest.fn(),
  useLastViewed: jest.fn(),
}));

describe('Characters', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should the Characters component exported correctly', () => {
    expect(Characters).toBeDefined();
  });

  it('should render navigation, characters list, and scroll to top button', () => {
    const mockCharacters = [
      { id: 1, name: 'Rick Sanchez', image: 'https://example.com/rick.png' },
      { id: 2, name: 'Morty Smith', image: 'https://example.com/morty.png' },
    ];
    const mockCount = 1;
    const mockLoading = false;
    const mockRef = jest.fn();
    const mockScrollToTop = jest.fn();
    const mockIsVisible = true;

    useLastViewed.mockReturnValue({
      handleCharacterClick: jest.fn(),
    });

    useCharacters.mockReturnValue({
      loading: mockLoading,
      characters: mockCharacters,
    });

    useCounter.mockReturnValue({
      count: mockCount,
      incrementCount: jest.fn(),
      decrementPage: jest.fn(),
    });

    useScrollTop.mockReturnValue({
      ref: mockRef,
      scrollToTop: mockScrollToTop,
      isVisible: mockIsVisible,
    });

    render(<Characters />);

    expect(screen.getByTestId('navigation')).toBeInTheDocument();
    expect(screen.getByTestId('characters-list')).toBeInTheDocument();
    expect(screen.getByTestId('scroll-to-top-button')).toBeInTheDocument();

    expect(useCharacters).toHaveBeenCalledWith({ count: mockCount });
    expect(useCounter).toHaveBeenCalled();
    expect(useScrollTop).toHaveBeenCalled();
  });

  it('should calls incrementCount when navigation buttons are clicked', () => {
    useCharacters.mockReturnValue({
      loading: false,
      characters: [],
    });

    const incrementCountMock = jest.fn();
    const decrementPageMock = jest.fn();
    useLastViewed.mockReturnValue({
      handleCharacterClick: jest.fn(),
    });
    useCounter.mockReturnValue({
      count: 1,
      incrementCount: incrementCountMock,
      decrementPage: decrementPageMock,
    });

    useScrollTop.mockReturnValue({
      ref: { current: null },
      scrollToTop: jest.fn(),
      isVisible: false,
    });

    render(<Characters />);

    const incrementButton = screen.getByRole('button', {
      name: /next/i,
    });

    fireEvent.click(incrementButton);
    expect(incrementCountMock).toHaveBeenCalledTimes(1);
  });

  it('should calls decrementPage when navigation buttons are clicked', () => {
    useCharacters.mockReturnValue({
      loading: false,
      characters: [],
    });

    const incrementCountMock = jest.fn();
    const decrementPageMock = jest.fn();
    useLastViewed.mockReturnValue({
      handleCharacterClick: jest.fn(),
    });
    useCounter.mockReturnValue({
      count: 2,
      incrementCount: incrementCountMock,
      decrementPage: decrementPageMock,
    });

    useScrollTop.mockReturnValue({
      ref: { current: null },
      scrollToTop: jest.fn(),
      isVisible: false,
    });

    render(<Characters />);

    const decrementButton = screen.getByRole('button', {
      name: /prev/i,
    });

    fireEvent.click(decrementButton);
    expect(decrementPageMock).toHaveBeenCalledTimes(1);
  });
});
