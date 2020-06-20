document.addEventListener('DOMContentLoaded', () => {
  const face = document.querySelector('.face');
  const usernameInput = document.querySelector('.username');

  usernameInput.addEventListener('focus', (e) => {
    const length = Math.min(usernameInput.value.length - 16, 19);
    document.querySelectorAll('.hand').forEach((hand) => {
      hand.classList.remove('hide');
      hand.classList.remove('hide');
    });

    face.style.setProperty('--rotate-head', `${-length}deg`);
  });

  usernameInput.addEventListener('blur', (e) => {
    face.style.setProperty('--rotate-head', '0deg');
  });

  usernameInput.addEventListener('input', (e) => {
    const length = Math.min(event.target.value.length - 16, 19);
    face.style.setProperty('--rotate-head', `${-length}deg`);
  });

  const passwordInput = document.querySelector('.password');

  passwordInput.addEventListener('focus', (e) => {
    document.querySelectorAll('.hand').forEach((hand) => {
      hand.classList.add('hide');
    });

    document.querySelector('.tongue').classList.remove('breath');
  });

  passwordInput.addEventListener('blur', (e) => {
    document.querySelectorAll('.hand').forEach((hand) => {
      hand.classList.remove('hide');
      hand.classList.remove('peek');
    });
  });

  const showPasswordBtn = document.querySelector('.show-password-button');

  showPasswordBtn.addEventListener('click', (e) => {
    if (passwordInput.type === 'text') {
      passwordInput.type = 'password';
      document.querySelectorAll('.hand').forEach((hand) => {
        hand.classList.remove('peek');
        hand.classList.add('hide');
      });
    } else {
      passwordInput.type = 'text';
      document.querySelectorAll('.hand').forEach((hand) => {
        hand.classList.remove('hide');
        hand.classList.add('peek');
      });
    }
  });
});
