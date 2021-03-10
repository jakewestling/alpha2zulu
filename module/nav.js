const navButtons = document.querySelectorAll('.nav-button');
navButtons.forEach(function (navButton) {
  navButton.addEventListener('click', function (e) {

    if (e.target.classList.contains('nav-button')) {
      let rect = e.target.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      let ripple = document.createElement('span');
      ripple.classList.add('ripple');
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      this.appendChild(ripple);
      ripple.addEventListener('animationend', function () {
        ripple.remove();
      });
    } else if (e.target.parentElement.classList.contains('nav-button')) {
      let rect = e.target.parentElement.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      let ripple = document.createElement('span');
      ripple.classList.add('ripple');
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      this.appendChild(ripple);
      ripple.addEventListener('animationend', function () {
        ripple.remove();
      });
    } else {
      console.error("Clicked on a child of navButton that was too deep for event bubbling.");
    }



  })
})