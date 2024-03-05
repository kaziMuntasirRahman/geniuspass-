let statContainer = document.getElementById('stats-container');
let stat = document.getElementsByClassName('stat');
let statTextContainer = document.querySelectorAll('.stat > div');
let statHeader = document.querySelectorAll('.stat > div > h2');
let statDesc = document.querySelectorAll('.stat > div > p');


stat.forEach(function (n) {
  n.classList.add('bg-lime-400', 'flex', 'bg-white', 'rounded-3xl', 'border-b-2', 'border-lime-600', 'p-8');
  n.style.width='308px';
});


navLinks.forEach(function(n) {
  n.classList.add('text-center', 'text-gray-950', 'text-opacity-70', 'text-lg', 'font-medium')
  n.style.fontFamily='Raleway';
});


statHeader.forEach(function (n) {
  n.classList.add('text-center', 'text-gray-950', 'text-4xl', 'font-bold')
  n.style.fontFamily = 'Inter';
});

statDesc.forEach(function (n) {
  n.classList.add('text-gray-950', 'text-opacity-60', 'text-lg', 'font-normal');
  n.style.fontFamily = 'Inter';
});


statTextContainer.forEach(function (n) {
  n.classList.add('flex');
});
  