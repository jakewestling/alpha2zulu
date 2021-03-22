/* ===== Nav Bar ===== */
const navButtons = document.querySelectorAll('.nav-button');
// Nav Bar UI - Ripple Effect on Button Press
navButtons.forEach(function (navButton) {
  navButton.addEventListener('click', function (e) {
    if (e.target.classList.contains('nav-button')) {
      let rect = e.target.getBoundingClientRect();
      makeRipple(e, rect, this);
    } else if (e.target.parentElement.classList.contains('nav-button')) {
      let rect = e.target.parentElement.getBoundingClientRect();
      makeRipple(e, rect, this);
    } else {
      console.error("Clicked on a child of navButton that was too deep for event bubbling.");
    }
  })
});
function makeRipple(e, rect, self) {
  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;
  let ripple = document.createElement('span');
  ripple.classList.add('ripple');
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  self.appendChild(ripple);
  ripple.addEventListener('animationend', function () {
    ripple.remove();
  });
}

// Nav Bar UI - Active Tab
function clearActiveTab() {
  navButtons.forEach(function (navButton) {
    navButton.classList.remove('nav-button-active');
  });
}
navButtons.forEach(function (navButton) {
  navButton.addEventListener('click', function (e) {
    clearActiveTab();
    navButton.classList.add('nav-button-active');
  })
});
