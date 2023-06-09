import './index.css';
import { forwardRef } from 'react';

const ScrollToTopButton = forwardRef(({ scrollToTop, isVisible }, ref) => {
  return (
    <button
      ref={ref}
      onClick={scrollToTop}
      className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
    >
      Scroll to Top
    </button>
  );
});

export default ScrollToTopButton;
