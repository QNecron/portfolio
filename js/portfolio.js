/*

  Portfolio JS

*/

document.addEventListener("DOMContentLoaded", function(event) {

  //
  var pageContainer = document.querySelector('[data-page-container]');
  var menu = document.querySelector('[data-menu]');
  var menuTrigger = document.querySelector('[data-menu-trigger]');
  var dialog = document.querySelectorAll('[data-dialog]');
  var dialogTrigger = document.querySelectorAll('[data-dialog-trigger]');
  // var dialogOverlay = document.querySelector('[data-dialog-overlay]');
  var date = new Date();
  var year = date.getFullYear();
  var yearUpdate = document.querySelector('[data-year]');

  //
  function ariaHidden(ele, attr) {
    ele.setAttribute('aria-hidden', attr.toString());
  }

  //
  function menuSetup(link, menu) {

    link.addEventListener('click', function(m) {
      m.preventDefault();
      menu.classList.toggle('open');
      link.classList.toggle('open');

      // mobile
      if(window.innerWidth <= 767) {

        if(link.getAttribute('aria-expanded') == 'false') {
          link.setAttribute('aria-expanded', 'true');
        }
        else {
          link.setAttribute('aria-expanded', 'false');
        }

      }

    });

  }

  menuSetup(menuTrigger, menu);

  //
  function openDialog(trigger) {
    var openTrigger = trigger.getAttribute('data-dialog-trigger');

    for( var i = 0; i < dialog.length; i++ ) {

      if( dialog[i].getAttribute('data-dialog') == openTrigger ) {
        ariaHidden(dialog[i], false);
      }

    }

  }

  function closeDialog(ele) {
    var closeDialog;

    for( var i = 0; i < ele.length; i++ ) {

      closeDialog = ele[i].querySelector('[data-dialog-close]');

      closeDialog.addEventListener('click', function() {
        ariaHidden(this.parentElement, true);
        ariaHidden(pageContainer, false);
        // dialogOverlay.setAttribute('data-dialog-overlay', 'open');
      });

    }

  }

  function closeAllDialog(ele1, ele2) {

    for( var i = 0; i < ele1.length; i++ ) {
      ariaHidden(ele1[i], true);
    }

    ariaHidden(ele2, false);
    // dialogOverlay.setAttribute('data-dialog-overlay', 'open');

  }

  for( var i = 0; i < dialogTrigger.length; i++ ) {

    dialogTrigger[i].addEventListener('click', function(l) {
      openDialog(this);
      closeDialog(dialog);
      ariaHidden(pageContainer, true);
      // dialogOverlay.setAttribute('data-dialog-overlay', 'open');
    });

  }

  // dialogOverlay.addEventListener('click', function(o) {
  //   closeAllDialog(dialog, pageContainer);
  // });

  document.onkeyup = function(event) {
    event = event || window.event;

    var e = event.keyCode;

    // ECS key
    if( e == 27 ) {
      closeAllDialog(dialog, pageContainer);
    }

  }

  //
  yearUpdate.innerHTML = year;

  //
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      if (document.getElementById(this.getAttribute('href'))) {

        document.getElementById(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });

      }

    });

  });

});
