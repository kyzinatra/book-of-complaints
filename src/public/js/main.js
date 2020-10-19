document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  M.Sidenav.init(elems, {});
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.dropdown-trigger');
  M.Dropdown.init(elems, {});
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.tabs');
  M.Tabs.init(elems, {});
});

document.addEventListener('DOMContentLoaded', function() {
   const link = document.querySelectorAll('#top_link');
  link.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo = 0;
  })
});