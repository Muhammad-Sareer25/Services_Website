import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Resets scroll position to the top whenever the route changes.
// Without this, React Router preserves scroll position across navigations,
// which feels broken when linking from a footer or a long page (e.g. clicking
// "Client Login" from the bottom of the page leaves you scrolled down).
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;