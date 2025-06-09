const toggleBtn = document.getElementById("theme-toggle");
const rootElement = document.documentElement;

toggleBtn.addEventListener("click", () => {
    const currentTheme = rootElement.getAttribute('data-theme');
    if (currentTheme === 'light') {
        rootElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else{
        rootElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
});

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }
});

const allCategories = document.querySelectorAll('.category');
allCategories.forEach(categoryE1 => {

  const onIcon = categoryE1.querySelector('.fa-toggle-on');
  const offIcon = categoryE1.querySelector('.fa-toggle-off');

  if (categoryE1.classList.contains('extension-active')) {
    categoryE1.setAttribute('data-status', 'active');
  } else {
    categoryE1.setAttribute('data-status', 'inactive')
  }

  const toggleHandler = () => {
    const isNowActive = categoryE1.classList.toggle('extension-active');
    
    if (isNowActive) {
      categoryE1.setAttribute('data-status', 'active');
    } else {
      categoryE1.setAttribute('data-status', 'inactive');
    }
  };
  
  onIcon.addEventListener('click', toggleHandler);
  offIcon.addEventListener('click', toggleHandler);
});

const filterAllBtn = document.getElementById('filter-all');
const filterActiveBtn = document.getElementById('filter-active');
const filterInactiveBtn = document.getElementById('filter-inactive');

filterAllBtn.addEventListener('click', e => {
  e.preventDefault();
  document.querySelectorAll('.category').forEach(cat => {
    cat.style.display = 'block';
  });
});

filterActiveBtn.addEventListener('click', e => {
  e.preventDefault();
  document.querySelectorAll('.category').forEach(cat => {
    const status = cat.getAttribute('data-status');
    if (status === 'active') {
      cat.style.display = 'block';
    } else {
      cat.style.display = 'none';
    }
  });
});

filterInactiveBtn.addEventListener('click', e => {
  e.preventDefault();
  document.querySelectorAll('.category').forEach(cat => {
    const status = cat.getAttribute('data-status');
    if (status === 'inactive') {
      cat.style.display = 'block';
    } else {
      cat.style.display = 'none'
    }
  });
});



