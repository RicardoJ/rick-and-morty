import Navigation from '.';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Navigation', () => {
  it('should the Navigation component exported correctly', () => {
    expect(Navigation).toBeDefined();
  });

  it('should render the navigation component correctly', () => {
    const page = 1;
    const incrementPage = jest.fn();
    const decrementPage = jest.fn();

    render(
      <Navigation
        page={page}
        incrementPage={incrementPage}
        decrementPage={decrementPage}
      />,
    );

    const navigationElement = screen.getByTestId('navigation');
    const prevButton = screen.getByText('Prev');
    const pageText = screen.getByText('Page: 1');
    const nextButton = screen.getByText('Next');

    expect(navigationElement).toBeInTheDocument();
    expect(prevButton).toBeInTheDocument();
    expect(pageText).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  it('should call decrementPage when Prev button is clicked', () => {
    const page = 2;
    const incrementPage = jest.fn();
    const decrementPage = jest.fn();

    render(
      <Navigation
        page={page}
        incrementPage={incrementPage}
        decrementPage={decrementPage}
      />,
    );

    const prevButton = screen.getByText('Prev');
    fireEvent.click(prevButton);

    expect(decrementPage).toHaveBeenCalledTimes(1);
  });

  it('should call incrementPage when Next button is clicked', () => {
    const page = 2;
    const incrementPage = jest.fn();
    const decrementPage = jest.fn();

    render(
      <Navigation
        page={page}
        incrementPage={incrementPage}
        decrementPage={decrementPage}
      />,
    );

    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);

    expect(incrementPage).toHaveBeenCalledTimes(1);
  });

  it('should disable Prev button when page is 1', () => {
    const page = 1;
    const incrementPage = jest.fn();
    const decrementPage = jest.fn();

    render(
      <Navigation
        page={page}
        incrementPage={incrementPage}
        decrementPage={decrementPage}
      />,
    );

    const prevButton = screen.getByText('Prev');

    expect(prevButton).toBeDisabled();
  });
});
