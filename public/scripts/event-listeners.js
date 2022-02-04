`use strict`;

window.addEventListener('popstate', (e) => {
  e.preventDefault();
  history.forward();
});

// window.addEventListener('load', (e) => {
//   e.preventDefault();
//   e.stopImmediatePropagation();
//   e.stopPropagation();
// });