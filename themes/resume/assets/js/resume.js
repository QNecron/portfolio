

document.addEventListener('DOMContentLoaded', (event) => {
  
  const menuControl = document.getElementById('navControl');

  menuControl.addEventListener('click', () => {
    
    let expanded = menuControl.getAttribute('aria-expanded');
    
    menuControl.setAttribute('aria-expanded', expanded === 'true' ? 'false' : 'true');
    
  })
  
});