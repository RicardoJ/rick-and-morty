import ScrollToTopButton from '.';
import { render, screen, fireEvent } from '@testing-library/react';

describe('ScrollToTopButton', () => {
  it('should the ScrollToTopButton component exported correctly', () => {
    expect(ScrollToTopButton).toBeDefined();
  });

  it('should render the scroll to top button', () => {
    const scrollToTop = jest.fn();
    const isVisible = true;

    render(
      <ScrollToTopButton scrollToTop={scrollToTop} isVisible={isVisible} />,
    );

    const scrollToTopButton = screen.getByTestId('scroll-to-top-button');

    expect(scrollToTopButton).toBeInTheDocument();
    expect(scrollToTopButton).toHaveTextContent('Scroll to Top');
    expect(scrollToTopButton).toHaveClass('scroll-to-top-button');
    expect(scrollToTopButton).toHaveClass('visible');
  });

  it('should call scrollToTop when the button is clicked', () => {
    const scrollToTop = jest.fn();
    const isVisible = true;

    render(
      <ScrollToTopButton scrollToTop={scrollToTop} isVisible={isVisible} />,
    );

    const scrollToTopButton = screen.getByTestId('scroll-to-top-button');
    fireEvent.click(scrollToTopButton);

    expect(scrollToTop).toHaveBeenCalledTimes(1);
  });

  it('should not have the "visible" class when isVisible is false', () => {
    const scrollToTop = jest.fn();
    const isVisible = false;

    render(
      <ScrollToTopButton scrollToTop={scrollToTop} isVisible={isVisible} />,
    );

    const scrollToTopButton = screen.getByTestId('scroll-to-top-button');

    expect(scrollToTopButton).not.toHaveClass('visible');
  });
});
