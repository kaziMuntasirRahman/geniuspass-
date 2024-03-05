const navLinks = ['Home', 'About', 'Destination', 'Search'];
const menubar = document.getElementsByClassName('menu-child');
const menubarClass = [' menu menu-sm dropdown-content mt-3 z-10 p-2 shadow rounded-box ', ' menu menu-horizontal px-1 '];
let i=0;


for (const menu of menubar) {
  for (const navLink of navLinks) {
    menu.innerHTML += `
    <li><a class="text-opacity-70 text-lg font-medium font-['Raleway']">${navLink}</a></li>
    `
  }
  menu.classList += menubarClass[i++];
  menu.classList.add('border', 'border-black')
  
}