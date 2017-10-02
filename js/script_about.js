
/*Creating variables for different elements on the site*/
var header = document.getElementById('header');
var picturebg = document.getElementsByClassName('backgroundPic')[0];
var arrow = document.getElementsByClassName('toTop-transparent')[0];
var supportPageOffset = window.pageXOffset !== undefined;

/*Creating a function that tells the browser to change said elements on window-scroll in the y-axis.*/
window.onscroll = function() {
  "use strict";
  var y = window.scrollY;

  if (y > 7) {
    header.className = 'header-colored';
    arrow.className = 'toTop';
    picturebg.className = 'backgroundPicns';
  } else {
    header.className = 'header-transparent';
    arrow.className = 'toTop-transparent';
    picturebg.className = 'backgroundPic';
  }
};


/*This is for the menu-icon on mobile devices.
  Here we are creating a function that tells the browser to apply transformations that is defined in the css*/
  var menus = document.getElementsByClassName('toggle');

  [].forEach.call(menus, function (m) {
    m.addEventListener('click', function () {
      m.classList.toggle('open');
    });
  });
