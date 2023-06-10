window.addEventListener('DOMContentLoaded', function() {
    var floatingButton = document.querySelector('.floating-button');
    var container = document.querySelector('.container');
    var buttonHeight = floatingButton.offsetHeight;
    var containerHeight = container.offsetHeight;
    var windowHeight = window.innerHeight;
  
    window.addEventListener('scroll', function() {
      var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      var maxScroll = containerHeight - windowHeight;
  
      if (scrollPosition >= maxScroll) {
        floatingButton.style.position = 'absolute';
        floatingButton.style.bottom = '20px';
      } else {
        floatingButton.style.position = 'fixed';
        floatingButton.style.bottom = '20px';
      }
    });
  });
  