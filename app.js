const navBtn = document.getElementById('nav-toggle-btn');
const navWrapper = document.getElementById('link-wrapper');

navBtn.addEventListener('click', () => {
  if(navWrapper.style.display === '') {
    navWrapper.style.display = 'flex'
  } else {
    navWrapper.style.display = ''
  }
})