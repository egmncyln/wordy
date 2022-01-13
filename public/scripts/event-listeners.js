`use strict`;

window.addEventListener('popstate', (e) => {
  e.preventDefault();
  history.go(1);
});

window.addEventListener('load', (e) => {
  e.preventDefault();
  e.stopImmediatePropagation();
  e.stopPropagation();
});