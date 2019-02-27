var currentModal = '';


  // function for toggling login and signup modal
  toggleModal = function(e){
    const elem = e.target.getAttribute('data-modal');
    if (currentModal && currentModal !== elem) {
      document.getElementById(currentModal).classList.add('hidden');
      document.getElementById(elem).classList.remove('hidden');
    } else {
      document.getElementById(elem).classList.toggle('hidden');
    }
    currentModal = elem;
  },

  // function for dismissing modal
  dismissModal = function(){
    if (currentModal) {
      document.getElementById(currentModal).classList.add('hidden');
      currentModal = null;
    }
  };

  // function for page animation and modal script
  var startAnimation = function(){
    const classname = document.getElementsByClassName('trigger');
    Array.from(classname).forEach(function(element) {
      element.addEventListener('click', toggleModal);
    });
    const dismissname = document.getElementsByClassName('dismiss');
    Array.from(dismissname).forEach((element) => {
      element.addEventListener('click', dismissModal);
    });
  };
  // onload methods for ui animation and signup and login modal events
window.onload = () => {
    startAnimation();
  };