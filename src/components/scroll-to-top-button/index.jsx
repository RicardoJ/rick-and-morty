import { forwardRef } from 'react';
import './index.css';

const ScrollToTopButton = forwardRef(({ scrollToTop, isVisible }, ref) => {
  return (
    <button
      data-testid="scroll-to-top-button"
      ref={ref}
      onClick={scrollToTop}
      className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
    >
      Scroll to Top
    </button>
  );
});

export default ScrollToTopButton;
